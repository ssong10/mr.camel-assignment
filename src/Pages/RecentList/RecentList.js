import React from 'react';
import RecentCard from './RecentCard';
import INITIALDATA from '../../asset/data.json'
import Button from '../../Components/button'
import SortModal from './sortModal'

class RecentList extends React.Component{
    state = {
        defaultItems : INITIALDATA,
        recentList : [{id:1,time:4},{id:2,time:12},{id:4,time:20},{id:20,time:3}],
        modal:false
    }
    toggleModal = () => {
        this.setState({modal:!this.state.modal})
    }
    sortByPrice = () => {
        const {defaultItems,recentList} = this.state
        return recentList.sort((a,b) => {
            return (defaultItems[a.id].price - defaultItems[b.id].price)
        })
    }
    sortByRecent = () => {
        return this.state.recentList.sort((a,b) => {
            return a.time - b.time
        })
    }
    sortItem = (type) => {
        let sortedItem;
        if (type === 'price') {
            sortedItem =  this.sortByPrice()
        }
        if (type === 'recent') {
            sortedItem = this.sortByRecent()
        }
        this.setState({recentList:sortedItem})
        console.log(sortedItem)
    }
    render() {
        return (
            <div>
                <RecentCard
                    defaultItems={this.state.defaultItems}
                    recentList={this.state.recentList}
                />
                <Button onClick={this.toggleModal}>정렬</Button>
                <div>
                <SortModal 
                    show={this.state.modal}
                    toggle={this.toggleModal}
                    sortItem={this.sortItem}
                >
                </SortModal>
                </div>
            </div>
        )
    }
}

export default RecentList;