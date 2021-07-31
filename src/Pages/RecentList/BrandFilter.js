import { React, Component } from "react";
import styled from 'styled-components';

const Form = styled.form`
    display:flex;
    margin-left: calc((100% - (20% * 4)) / 4);
    margin-top:30px;
`;

const CheckBox = styled.div`
    padding-left:10px;
`

class BrandFilter extends Component {
    state={
        checked: []
    }
  
    render(){
        const {handleBrandFilters} = this.props;

        const handleToggle = (value) => {
            const currentIndex = this.state.checked.indexOf(value);
            const newChecked = [...this.state.checked]
    
            if(currentIndex === -1) {
                newChecked.push(value)
            } else {
                newChecked.splice(currentIndex, 1)
            }
            this.setState({checked: newChecked})
            handleBrandFilters(newChecked)
        }

        const getBrand = (data) =>{
            const brands = new Set();
            data.forEach((product) => {
                brands.add(product.brand)
                }
            )
            return [...brands];
        }

        const brand = getBrand(this.props.defaultItems)

        const CheckBoxList = () => brand.map((value, index)=>
            <CheckBox key={index}>
                <span>{value}</span>
                <input
                    type="checkbox"
                    onChange={()=>handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1 }
                    value={value}
                />
            </CheckBox>    
        );

        return (
        <>
            <Form>
                {CheckBoxList()}
            </Form>
        </>
        )
    }
}

export default BrandFilter;