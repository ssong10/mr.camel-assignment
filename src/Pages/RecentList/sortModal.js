import React from 'react';
import styled from 'styled-components'
import Modal from '../../Components/modal'
import Button from '../../Components/button'

const FormWrap = styled.form`
  width: 100%;
  height: 100%;
  position:relative;
`
const Body = styled.div`
  margin-left: 10%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 70%;
`
const Label = styled.label`
  display:block;
`
const Footer = styled.div`
  margin-top:auto;
  display:flex;
  justify-content:space-around
`
class RecentList extends React.Component{
  state = {
    type : 'recent'
  }
  setType(value) {
    this.setState({type:value})
  }
  sortItem(e) {
    e.preventDefault()
    this.props.setSortType(this.state.type)
    this.props.toggle()
  }
  render() {
    return (
      <Modal 
        Small
        show={this.props.show}
        toggle={this.props.toggle}
      >
        <FormWrap
          onSubmit={e => this.sortItem(e)}
        >
          <Body>
            <Label>
              <input type="radio" value="recent"
                onChange={e => this.setType(e.target.value)}
                checked={this.state.type==='recent'}
              />
              최근조회순
            </Label>
            <Label>
              <input type="radio" value="price"
                onChange={e => this.setType(e.target.value)}
                checked={this.state.type==='price'}/>
              가격순
            </Label>
          </Body>
          <Footer>
            <Button
              type="submit"
            >
              정렬
            </Button>
            <Button
              type="button"
              onClick={this.props.toggle}
            >
              닫기
            </Button>
          </Footer>
        </FormWrap>
      </Modal>
    )
  }
}
export default RecentList