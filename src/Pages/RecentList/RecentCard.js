import React, { Component } from 'react';
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
  render() {
    const { showItem } = this.props
    return (
      <>
        <CardContainer>
          {showItem.map((c,index) => (
            <Card key={index}>
              <div>{c.title}</div>
              <div>{c.price}원</div>
              <div>{c.brand}</div>
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