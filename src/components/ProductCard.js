import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component{
    render() {
        const {id,title,brand,price} = this.props;
        const state = {id,title,brand,price};

        return (
            <div>
                <Link to={{
                    pathname : '/product',
                    state
                }}>
                    {title}
                </Link>
            </div>
        )
    }
}

export default ProductCard;