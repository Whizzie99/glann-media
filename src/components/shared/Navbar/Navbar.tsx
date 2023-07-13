import React from "react";
import Container from "../Container/Container";
import { StyledWrapper, StyledLogo, StyledHamburgerMenu, StyledNav } from "./styles";

import logo from "../../../assets/images/logo.png"

const Navbar: React.FC = () => {
  return (
    <StyledWrapper>
      <Container width="90%">
        <StyledNav>
          <StyledLogo>
            <img src={logo} alt="Glann Media Consult Logo" />
          </StyledLogo>
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