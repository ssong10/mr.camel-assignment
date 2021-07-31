import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top:30px;
`;
const Card = styled(Link)`
  border : 0.5px solid black;
  display: flex;
  flex-direction: column;
  margin-left: calc((100% - (20% * 4)) / 4);
  margin-bottom:20px;
  text-align: center;
`;
const Title = styled.div`
  font-size:16px;
  font-weight: bold;
  text-align: center;
  padding:20px;
`;
const Price = styled.div`
   text-align: right;
`;
const Brand = styled.div`
  padding-top:5px;
  font-weight: bold;
  
`;


class RecentCard extends Component {
  render() {
    const { showItem } = this.props

    return (
      <>
        <CardContainer>
          {showItem.map((c,index) => (
            <Card key={index} to={{
              pathname: '/product',
            }}>
              <Brand>{c.brand}</Brand>
              <Title>{c.title}</Title>
              <Price>{c.price}원</Price>
              <div>id:{c.id}</div>
              <div>time:{c.time}</div>
            </Card>
          ))}
        </CardContainer>
      </>
    )
  }
}
export default RecentCard;