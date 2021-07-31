import React from 'react'
import RecentCard from './RecentCard'
import { fetchProduct } from 'utils/api'
import Button from '../../Components/button'
import SortModal from './sortModal'
import BrandFilter from './BrandFilter'
import { recentShowLocalStorage } from 'utils/localStorage'
import styled from 'styled-components'

const ModalButton = styled(Button)`
    margin-left:26%;
`;

// 아마 storage나 props 에서 받아올 데이터
class RecentList extends React.Component{
    state = {
        defaultItems : [],
        recentList : recentShowLocalStorage._list,
        modal:false,
        filters: [],    
        baseItem: [],
        sortType: 'recent',
    }

    async initialData() {
        const defaultItems = await fetchProduct()
        const baseItem = this.filterItem(defaultItems,recentShowLocalStorage._list)
        this.setState({defaultItems,baseItem})
    }
    componentDidMount() {
        this.initialData()
    }

    // only baseItem setting
    // Item data + { time } -> for order
    filterItem(defaultItems,recentList) {
        console.log(defaultItems,recentList)
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
        console.log('filter',filters,filteredItem)
        return filteredItem
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
                <div>
                    <BrandFilter
                        defaultItems={this.state.defaultItems}
                        handleBrandFilters={filters => this.setState({filters})}
                    />
                    <ModalButton onClick={this.toggleModal}>정렬</ModalButton>
                </div>
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