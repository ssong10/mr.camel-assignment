import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled(Link)`
  background-color: white;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;

class Card extends React.Component {
  render() {
    const { title } = this.props.item;

    return (
      <CardLink
        to={{
          pathname: '/product',
          state: this.props.item,
        }}
      >
        {title}
      </CardLink>
    );
  }
}

export default Card;
