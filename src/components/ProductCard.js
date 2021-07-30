import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component{
    render() {
        const {title,brand,price} = this.props;

        return (
            <div>
                <Link to={{
                    pathname : '/product',
                    title, brand, price
                }}>
                    {title}
                </Link>
            </div>
        )
    }
}

export default ProductCard;