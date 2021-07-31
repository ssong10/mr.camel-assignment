import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { title } = this.props.item;

    return (
      <div>
        <Link
          to={{
            pathname: '/product',
            state: this.props.item,
          }}
        >
          {title}
        </Link>
      </div>
    );
  }
}

export default Card;
