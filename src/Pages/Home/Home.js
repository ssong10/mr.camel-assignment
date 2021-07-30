import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from 'Components/ProductCard'
import products from './product.json';

class Home extends React.Component{
    renderProductCard() {
        return products.map(({title,brand,price},index) => <ProductCard key={index} title={title} brand={brand} price={price}/>);
    }

    render() {
        return (
            <div>
                {this.renderProductCard()}
                <Link to='/recentList'>최근조회이력</Link>
            </div>
        )
    }
}

export default Home;