import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  opacity: 1;
  transform-matrix: matrix(1,0,0,1,0,0);
  cursor: pointer;
  position: fixed;
  top: 100px;
  right: 120px;
  width: 30px;
  height: 40px;
  z-index: 2048;
  transform: translate3d(100px, -100px, 0);
  @media only screen and (max-width: 767px) {
    top: 15px;
    right: 15px;
  }
`;

const Line = styled.span`
  position: absolute;
  height: 2px;
  width: 20px;
  background: #6e6e6e;
  right: 0;
  border-radius: 2px;
  transform: rotate(0deg);
  transition: all .2s cubic-bezier(0.615, 0.19, 0.305, 0.91) 0s;
`;

const spin = css`
  background: #6e6e6e;
  border-radius: 2px;
  background-clip: padding-box;
  transform: rotate(135deg);
`

const LineTop = Line.extend`
  top: 14px;
`;

const LineBottom = Line.extend`
  bottom: 16px;
`;


class Hamburger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container onClick={this.props.onClick}>
        <LineTop />
        <LineBottom />
      </Container>
    );
  }
}

export default Hamburger;
