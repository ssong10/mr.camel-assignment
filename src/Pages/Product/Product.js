import React from 'react';
import styled from 'styled-components';
import Button from 'Components/button';
import {moneyFormat} from 'utils/format';

class Product extends React.Component{
    render() {
        const {title,brand,price} = this.props.location;

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
                    <Button>랜덤 상품 보기</Button>
                    <Button>관심 없음</Button>
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