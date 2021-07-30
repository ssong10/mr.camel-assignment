import React from 'react'
import styled from 'styled-components'
import Button from './button'

const HeaderWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom : 1px solid gray;
  padding: 8px 0px;
`

const RedButton = styled(Button)`
  color: red;
`

class Header extends React.Component {
  random() {
    console.log('random')
  }
  toHome() {
    console.log('home')
  }

  render() {
    return (
      <HeaderWrap>
        <Button
          select
          onClick={this.toHome}
        >
          Home
        </Button>
        <Button
          select
          onClick={this.random}
        >
          Random
        </Button>
        <RedButton>b</RedButton>
      </HeaderWrap>
    )
  }
}

export default Header