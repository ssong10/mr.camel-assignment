import React from 'react'
import styled , { css } from 'styled-components'

const setSize = (props) => {
  if (props.Large) {
    return css`
      padding: 16px 16px;
    `
  }
  if (props.Small) {
    return css`
      line-height: 1;
      padding: .125rem .375rem;
    `
  }
  return css`
    padding: .375rem .75rem;
    line-height: 1.5;
  `
}

const ButtonWrap = styled.button`
  background: ${props => props.select ? "#a9a3a9" : "white"};
  color: ${props => props.select ? "white" : "#a9a3a9"};
  border: 2px solid #a9a3a9;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out;
  ${props => setSize(props)}
  &:hover {
    background: ${props => props.select ? "#737379" : "#e9e7e3"};
    border: 2px solid ${props => props.select ? "#737379" : "#e9e7e3"};
  }
`;

class Button extends React.Component {
  constructor(props) {
    super()
    this.props = props
  }
  render() {
    return (
      <ButtonWrap {...this.props}>
      </ButtonWrap>
    )
  }
}

export default Button