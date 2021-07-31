import React from 'react';
import styled from 'styled-components';
import Button from 'Components/button';
import { moneyFormat } from 'utils/format';
import { unInterestLocalStorage, recentShowLocalStorage } from 'utils/localStorage';
import { fetchProduct } from 'utils/api';

const Container = styled.div`
    display : flex;
    flex-direction: column;
    max-width : 500px;
    margin : auto;
    padding : 30px 0;
`;
const Row = styled.div`
    display : flex;
    justify-content:space-between;
    width : 100%;
    margin-bottom : 15px;
`;
const Title = styled.div`
    margin-bottom : 5px;
    font-weight : 600;
    font-size : 28px;
`;
const Brand = styled.span`
    display : inline-block;
    color : grey;
    margin-bottom : 25px;
`;
const Price = styled.span`
    color : rgb(240, 40, 40);
    font-weight : 600;
`;

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item : this.props.location.state }
  }

  componentDidMount() {
    const { history } = this.props;
    const { id } = this.state.item;

    if (!this.state.item || unInterestLocalStorage.includes(id)) {
      history.goBack();
      return;
    }

    recentShowLocalStorage.push({ id, time: Date.now() });
    this.getProducts();
  }

  async getProducts() {
    this.products = await fetchProduct();
  }

  addUnInterest = () => {
    const { id } = this.state.item;

    unInterestLocalStorage.push({ id, time: Date.now() });

    this.showRandomProduct();
  }

  showRandomProduct = () => {
    const { history } = this.props;

    const filterProduct = this.products.filter((item) => !unInterestLocalStorage.includes(item.id));
    console.log(filterProduct.length);

    if (filterProduct.length === 0) {
      alert('더 이상 없습니다.');
      history.push('/');
      return;
    }

    const randomIndex = Math.floor(Math.random() * filterProduct.length);
    const nextProduct = filterProduct[randomIndex];

    recentShowLocalStorage.push({ id: nextProduct.id, time: Date.now() });

    this.setState({
      item : nextProduct
    });
  }

  render() {
    if (!this.state.item) return null;

    const { title, brand, price } = this.state.item;

    return (
      <Container>
        <Title>{title}</Title>
        <Brand>{brand}</Brand>
        <Row>
          <span>판매가 : </span>
          <div>
            <Price>{moneyFormat(price)}</Price><span>원</span>
          </div>
        </Row>
        <Row>
          <Button onClick={this.showRandomProduct}>랜덤 상품 보기</Button>
          <Button onClick={this.addUnInterest}>관심 없음</Button>
        </Row>
      </Container>
    )
  }
}

export default Product;