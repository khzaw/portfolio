import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Hamburger from './Hamburger';

const Nav = styled.nav`
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



const NavDrawer = () => (
  <Nav>
    <Hamburger />
    <NavList>
      <NavItem>Portraits</NavItem>
      <NavItem>Architecture</NavItem>
      <NavItem>Cityscapes</NavItem>
      <NavItem>Lifestyle</NavItem>
      <NavItem>Presets</NavItem>
    </NavList>
  </Nav>

);

export default NavDrawer;
