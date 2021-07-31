import React from 'react';
import Card from '../Home/Components/Card';
import { Link } from 'react-router-dom';
// import { ArraylocalStorage } from '../../utils/localStorage';
import styled from 'styled-components';

// setItem('notInclude', ['루이비통', '나이키']);
// const notInclude = new ArraylocalStorage('notInclude');
//로컬스토리지에서 값을 읽어오는게 가능해지는 코드.

class Home extends React.Component {
  state = {
    cards: [],
  };
  componentDidMount() {
    fetch('/asset/data.json')
      .then(res => res.json())
      .then(res => {
        const cards = res.map((card, id) => {
          return {
            ...card,
            id: id + 1,
          };
        });
        this.setState({ cards: cards });
        console.log(cards);
      });
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <Link to="/recentList">최근조회이력</Link>
        <CardList>
          {cards
            .filter(data => {
              return data;
              // const { brand } = data;
              // console.log(notInclude)
              //const f = notInclude.list.find(string => string === brand);
              // if (f > '') {
              //   // match
              //   return false;
              // } else {
              //   // not match
              //   return true;
              // }
            })

            .map((data, index) => (
              <Box key={index}>
                <Card key={index} item={data} />
              </Box>
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
  box-sizing: border-box;
  width: 80vw;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Box = styled.div`
  background-color: white;
  border: 1px solid black;
  //width: 80%;
  margin: 10px 15px;
  box-sizing: border-box;
  text-align: center;
`;
