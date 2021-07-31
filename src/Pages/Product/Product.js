import React from 'react';
import styled from 'styled-components';
import Button from 'Components/button';
import {moneyFormat} from 'utils/format';
import {unInterestLocalStorage} from 'utils/localStorage';
import products from './product.json';

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
    }

    componentDidMount() {
        const {history} = this.props; 
        const {id} = this.state;

        if (!id || unInterestLocalStorage.includes(id)) {
            history.goBack();
        }
    }

    showRandomProduct = ()=> {
        const {history} = this.props;

        const unInterestIds = unInterestLocalStorage.list.map(item=> item.id);
        const filterProduct = products.filter((item,id)=> !unInterestIds.includes(id)); // 임시 : id 수정 필

        if (filterProduct.length === 0) {
            alert('더 이상 없습니다.');
            history.push('/');
        }

        const randomIndex = Math.floor(Math.random()*filterProduct.length);
        const nextProduct = filterProduct[randomIndex]; 

        this.setState({
            id:randomIndex, ...nextProduct // 임시 : id 수정 필
        });
    }

    addUnInterest = ()=> {
        const {id} = this.props.location.state;

        unInterestLocalStorage.push({id,time:Date.now()});

        this.showRandomProduct();
    }

    render() {
        const {id,title,brand,price} = this.state;

        if (!id) return null;

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

                {/* <Link to='/recentList'>최근조회이력</Link> */}
            </Container>
        )
    }
}

const Container = styled.div`
    display : flex;
    flex-direction: column;
    max-width : 500px;
    margin : auto;
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

export default Product;