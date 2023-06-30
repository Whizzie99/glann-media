import React from "react";
import Container from "../Container/Container";
import { StyledWrapper, StyledNavLogo, StyledHamburgerMenu, StyledNav } from "./styles";

import logo from '../../../assets/images/logo.png';

const Navbar: React.FC = () => {
  return (
  <StyledWrapper>
    <Container>
      <StyledNav>
        <StyledNavLogo>
          <img src={logo} alt="logo" />
        </StyledNavLogo>
        <StyledHamburgerMenu>
          <span></span>
          <span></span>
          <span></span>
        </StyledHamburgerMenu>
      </StyledNav>
    </Container>
  </StyledWrapper>
  );
}

export default Navbar;