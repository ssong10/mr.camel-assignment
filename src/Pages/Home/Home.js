import React from 'react';
import Card from '../Home/Components/Card';
//import { Link } from 'react-router-dom';
// import { ArraylocalStorage } from '../../utils/localStorage';
import {fetchProduct} from 'utils/api'
import styled from 'styled-components';

class Home extends React.Component {
  state = {
    cards: [],
  };
  async getProduct () {
    const cards = await fetchProduct()
    this.setState({cards:cards})
  }
  componentDidMount() {
    this.getProduct()
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        {/* <Link to="/recentList">최근조회이력</Link> */}
        <CardList>
          {cards
            .map((data, index) => (
              <Card key={index} item={data} />
            ))}
        </CardList>
      </div>
    );
  }
}

export default Home;

const CardList = styled.div`
  background-color: #f7f9fa;
  display: grid;
  width: 80vw;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
