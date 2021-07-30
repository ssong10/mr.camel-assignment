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
  constructor() {
    super()
    this.sortItem = this.sortItem.bind(this)
    this.setSortType = this.setSortType.bind(this)
  }
  state = {
    sortType : 'recent'
  }
  setSortType(e) {
    this.setState({sortType:e.target.value})
  }
  sortItem(e) {
    e.preventDefault()
    if (this.state.sortType) {
      this.props.sortItem(this.state.sortType)
      this.props.toggle()
    } else {
      alert('정렬 기준을 선택해 주세요')
    }
  }
  render() {
    return (
      <Modal 
        Small
        show={this.props.show}
        toggle={this.props.toggle}
      >
        <FormWrap
          onSubmit={this.sortItem}
        >
          <Body>
            <Label>
              <input type="radio" value="recent"
                onChange={this.setSortType}
                checked={this.state.sortType==='recent'}
              />
              최근조회순
            </Label>
            <Label>
              <input type="radio" value="price"
                onChange={this.setSortType}
                checked={this.state.sortType==='price'}/>
              가격순
            </Label>
          </Body>
          <Footer>
            <Button
              disabled={!this.state.sortType} 
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