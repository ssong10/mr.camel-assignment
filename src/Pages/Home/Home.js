import React from 'react';
import Card from '../Home/Components/Card';
import { Link } from 'react-router-dom';
import { setItem, ArraylocalStorage } from '../../utils/localStorage';
import styled from 'styled-components';

setItem('notInclude', ['루이비통', '나이키']);
const notInclude = new ArraylocalStorage('notInclude');
//로컬스토리지에서 값을 읽어오는게 가능해지는 코드.

class Home extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    fetch('/asset/data.json')
      .then(res => res.json())
      .then(res => this.setState({ cards: res }));
    //console.log(res);
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        Home
        <Link to="/recentList">최근조회이력</Link>
        <CardList>
          {cards
            .filter(data => {
              const { brand } = data;
              const f = notInclude.data.find(string => string === brand);
              if (f > '') {
                // match
                return false;
              } else {
                // not match
                return true;
              }
            })

            .map((data, index) => (
              <Box key={index}>
                <Card
                  key={index}
                  title={data.title}
                  brand={data.brand}
                  price={data.price}
                />
              </Box>
            ))}
        </CardList>
      </div>
    );
  }
}

export default Home;

const CardList = styled.div`
  background-color: white;
  border: 3px solid red;
  display: grid;
  box-sizing: border-box;

  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Box = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 25vw;
  box-sizing: border-box;
`;
//Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProductCard from 'Components/ProductCard'
// import products from './product.json';

// class Home extends React.Component{
//     renderProductCard() {
//         return products.map(({title,brand,price},index) => <ProductCard key={index} id={index} title={title} brand={brand} price={price}/>);
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderProductCard()}
//                 <Link to='/recentList'>최
