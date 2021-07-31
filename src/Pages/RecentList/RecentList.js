import React from 'react';
import RecentCard from './RecentCard';
import INITIALDATA from '../../asset/data.json'
import Button from '../../Components/button'
import SortModal from './sortModal'
import BrandFilter from './BrandFilter';

// 아마 storage나 props 에서 받아올 데이터
const RECENT_LIST = [{id:1,time:4},{id:2,time:12},{id:4,time:20},{id:20,time:3}]

class RecentList extends React.Component{
    state = {
        defaultItems : INITIALDATA,
        recentList : RECENT_LIST,
        modal:false,
        filters: [],    
        baseItem: this.filterItem(RECENT_LIST),
        sortType: 'recent',
    }
    // only baseItem setting
    // Item data + { time } -> for order
    filterItem(recentList) {
      const filteredItem = recentList.map((item) => {
        const { time , id } = item
        return {
            ...INITIALDATA[id],
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
        return this.state.baseItem.sort((a,b) => {
            return a.price - b.price
        })
    }
    sortByRecent = () => {
        return this.state.baseItem.sort((a,b) => {
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
                    handleBrandFilters={filters => this.setState({filters})}
                />
                <RecentCard
                    showItem={this.showItems(this.state.baseItem,this.state.filters)}
                />
                <Button onClick={this.toggleModal}>정렬</Button>
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