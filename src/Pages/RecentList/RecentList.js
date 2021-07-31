import React from 'react';
import RecentCard from './RecentCard';
import { fetchProduct } from 'utils/api'
import Button from '../../Components/button'
import SortModal from './sortModal'
import BrandFilter from './BrandFilter';
import { recentShowLocalStorage, unInterestLocalStorage } from 'utils/localStorage'



// 아마 storage나 props 에서 받아올 데이터
class RecentList extends React.Component{
    state = {
        defaultItems : [],
        recentList : recentShowLocalStorage.items,
        modal:false,
        filters: [],    
        baseItem: [],
        sortType: 'recent',
        hideUnInterest: false,
    }
    async initialData() {
        const defaultItems = await fetchProduct()
        const baseItem = this.filterItem(defaultItems,recentShowLocalStorage.items).reverse();
        this.setState({defaultItems,baseItem})
    }
    componentDidMount() {
        this.initialData()
    }
    
    // only baseItem setting
    // Item data + { time } -> for order
    filterItem(defaultItems,recentList) {
        const filteredItem = recentList.map((item) => {
            const { time , id } = item
            return {
                ...defaultItems[id-1],
                id,
                time
            }
        })
        return filteredItem
    }
    
    // Hide UnInterest
    toggleHideUnInterest() {
        this.setState({hideUnInterest:!this.state.hideUnInterest})
    }
    // filtering
    // item -> filtered item
    filtering(items, filters) {
        let filteredItem;
        if (filters.length) {
            filteredItem =  items.filter((data)=>{
                return filters.indexOf(data.brand) !== -1
            })
        } else {
            filteredItem = items
        }
        if (this.state.hideUnInterest) {
            const unInterestLocalSet = new Set(unInterestLocalStorage.items.map(item=>item.id))
            return filteredItem.filter((item)=> !unInterestLocalSet.has(item.id))
        } else {
            return filteredItem
        }
    }
    
    // modal
    toggleModal = () => {
        this.setState({modal:!this.state.modal})
    }
    
    // sort
    setSortType = (type) => {
        let sortedItem;
        if (type === 'price') {
            sortedItem = this.sortByPrice()
        }
        if (type === 'recent') {
            sortedItem = this.sortByRecent()
        }
        console.log('sorted',sortedItem)
        this.setState({baseItem:sortedItem})
    }
    
    sortByPrice = () => {
        return this.state.baseItem.sort((b,a) => {
            return a.price - b.price
        })
    }
    sortByRecent = () => {
        return this.state.baseItem.sort((b,a) => {
            return a.time - b.time
        })
    }

    // showItems by ( sort->items, filter )
    showItems(items,filter) {
        return this.filtering(items,filter)

    }
    render() {
        return (
            <div>
                <BrandFilter
                    defaultItems={this.state.defaultItems}
                    handleBrandFilters={filters => this.setState({filters})}
                />
                <Button onClick={this.toggleModal}>정렬</Button>
                <label>
                    <input
                        type="checkbox"
                        value={this.state.hideUnInterest}
                        onChange={(e) => this.toggleHideUnInterest(e)}
                    >
                    </input>관심없음 숨기기
                </label>
                <RecentCard
                    showItem={this.showItems(this.state.baseItem,this.state.filters)}
                />
                <div>
                <SortModal
                    show={this.state.modal}
                    toggle={this.toggleModal}
                    sortType={this.state.sortType}
                    setSortType={type => this.setSortType(type)}
                >
                </SortModal>
                </div>
            </div>
        )
    }
}

export default RecentList;