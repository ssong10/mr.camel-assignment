import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { timeFormat } from 'utils/format'

const CardContainer = styled.div`
  background-color: #f7f9fa;
  
  width: 50%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Card = styled(Link)`
  background-color: white;
  border: 1px solid black;
  margin: 15px;
  display:block;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
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
    const { showItem } = this.props;
    return (
      <>
        <CardContainer>
          {showItem.map((c,index) => (
            <Card key={index} to={{
              pathname: '/product',
              state: c
            }}>
              <Brand>{c.brand}</Brand>
              <Title>{c.title}</Title>
              <Price>{c.price}원</Price>
              <div>{timeFormat(c.time)}</div>
            </Card>
          ))}
        </CardContainer>
      </>
    )
  }
}
export default RecentCard;