import { React, Component } from "react";
import data from './data.json';
import styled from 'styled-components';

const Form = styled.form`
    display:flex;
    margin-left: calc((100% - (20% * 4)) / 4);
`;

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
            const brands = [];
            data.map((product) => {
                if(brands.indexOf(product.brand) === -1) {
                    brands.push(product.brand)
                }
            })
            return brands;
        }

        const brand = getBrand(data)

        const CheckBoxList = () => brand.map((value, index)=>
                <div key={index}>
                    <span>{value}</span>
                    <input
                        type="checkbox"
                        onChange={()=>handleToggle(value)}
                        checked={this.state.checked.indexOf(value) !== -1 }
                        value={value}
                    />
                </div>
                
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