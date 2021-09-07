import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 60px;
  background: red;
`;

const Logo = styled(Link)`
  color: #fff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <Logo>ELIXIR</Logo>
      <MenuBars />
      <NavMenu></NavMenu>
      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;
