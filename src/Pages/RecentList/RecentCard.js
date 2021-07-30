import React, { Component } from 'react';
import BrandFilter from './BrandFilter';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
const Card = styled.div`
    border : 0.5px solid black;
    display: flex;
    flex-direction: column;
    margin-left: calc((100% - (20% * 4)) / 4);
    margin-bottom:10px;
    width: 250px;
    height: 250px;
`;
class RecentCard extends Component {
  state= {
    // defaultItems : [100],
    // recentList : [{id:1,time:4},{id:2,time:12},{id:4,time:20},{id:20,time:3}],
    filtering : [],
    baseItem: this.filterItem(),
  }
  filterItem() {
    const filteredItem = this.props.recentList.map(({id}) => {
      return this.props.defaultItems[id]
    })
    return filteredItem
  }

  render() {
    const { baseItem,filtering } = this.state
    const handleBrandFilters = (filters) => {
      this.setState({filtering: filters})
    }
   
    const showFilterResults = () => {
      if (filtering.length === 0){
        return baseItem
      }
      const filteredResult = baseItem.filter((data)=>{
        return filtering.indexOf(data.brand) !== -1
      })
      return filteredResult
    }
   
    return (
      <>
        <BrandFilter
          handleBrandFilters = {filters => handleBrandFilters(filters)}
        />
        <CardContainer>
          {showFilterResults().map((c,index) => (
            <Card key={index}>
              {c.title}
              {c.price}
              {c.brand}
            </Card>
          ))}
        </CardContainer>
      </>
    )
  }
}
export default RecentCard;