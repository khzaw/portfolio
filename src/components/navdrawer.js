import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import Hamburger from './Hamburger';

const Nav = styled.nav`
  visibility: ${props => props.opened ? 'visibile': 'hidden'};
  transform: ${props => props.opened ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 753, 0)'};
  position: fixed;
  right: 0;
  height: 100vh;
  background: lightgray;
  z-index: 1024;

  width: 50vw;
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    width: 85vw;
  }
  @media only screen and (max-width: 767px) {
      width: 100vw;
  }
`;

const NavList = styled.ul`
  position: relative;
  text-align: right;
  margin: 100px 0 auto 0;
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    margin: 150px auto 0px;
    padding: 0px 30px;
  }
`;

const NavItem = styled.li`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
`;

const visible = css`
  visibility: visible;
  transform: matrix(1, 0, 0, 1, 0, 0);
`;


class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
  }

  toggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    return (
      <Nav opened={this.state.opened}>
        <Hamburger onClick={this.toggle} />
        <NavList>
          <NavItem>Portraits</NavItem>
          <NavItem>Architecture</NavItem>
          <NavItem>Cityscapes</NavItem>
          <NavItem>Lifestyle</NavItem>
          <NavItem>Presets</NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default NavDrawer;
