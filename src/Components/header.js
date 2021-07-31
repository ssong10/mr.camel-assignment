import React from 'react'
import styled from 'styled-components'
import Button from './button'
import {withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

const HeaderWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom : 1px solid rgba(0,0,0,.2);
  padding: 8px 0px;
  z-index: 10;
  background-color: #f9f9f9;
`
const RecentListLink = styled(Link)`
  display: ${props => props.hidden ? 'none' : 'block'};
  margin-right: 10%;
`

const LeftLink = styled(Link)`
  margin-left: 10%;
`

class Header extends React.Component {
  render() {
    const pathname = this.props.history.location.pathname
    return (
      <HeaderWrap>
        <LeftLink to='/'>
          <Button select={pathname==="/"}>
            Home
          </Button>
        </LeftLink>
        <RecentListLink 
          hidden={pathname === '/recentList'}
          to='/recentList'
        >
          <Button>
            최근 조회 목록
          </Button>
        </RecentListLink>
      </HeaderWrap>
    )
  }
}

export default withRouter(Header)