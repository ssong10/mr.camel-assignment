import React, { Component } from 'react';
import data from './data.json'
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
      dataList : data,
      filtering : { brand:[] }
    }
    
    render() {

      const handleBrandFilters = (filters, category) => {
        const newFilters = {...this.state.filtering}
        newFilters[category] = filters
        if(category === "brand") {
            showFilterResults(newFilters)
            this.setState({ filtering : newFilters }
              )
        }
        if(category === "id"){
            HideFilterResults(newFilters)
          this.setState({ filtering : newFilters }
            )
        }
    }

    const showFilterResults = (filters) => {
      if(filters.brand.length === 0) {
          this.setState({ dataList : data })
      } else {
          const filteredResult = Array.from(data).filter((data)=>{
              return filters.brand.indexOf(data.brand) !== -1
          })
          this.setState({ dataList:filteredResult })
      }
    }

    const HideFilterResults = (filters) => {
        if(filters.brand.length === 0) {
            this.setState({ dataList : data })
        } else {
            const filteredResult = Array.from(data).filter((data)=>{
                return filters.brand.indexOf(data.id) !== -1
            })
            this.setState({ dataList:filteredResult })
        }
      }

    return (
      <>
        
        <BrandFilter
          handleBrandFilters = {filters => handleBrandFilters(filters, "brand")}
        />
        <CardContainer>
          {this.state.dataList.map((c,index) => (
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
