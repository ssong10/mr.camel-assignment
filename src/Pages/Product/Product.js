import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component{
    render() {
        return (
            <div>
                Product
                <Link to='/'>홈</Link>
                <Link to='/recentList'>최근조회이력</Link>
            </div>
        )
    }
}

export default Product;