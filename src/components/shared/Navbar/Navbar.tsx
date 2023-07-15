import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import {
  StyledWrapper,
  StyledLogo,
  StyledHamburgerMenu,
  StyledNav,
  StyledMenuItems,
} from "./styles";

import logo from "../../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledWrapper>
        <Container width="90%">
          <StyledNav>
            <StyledLogo>
              <img src={logo} alt="Glann Media Consult Logo" />
            </StyledLogo>
            <StyledHamburgerMenu onClick={handleShowMenu} $isOpen={isOpen}>
              <span></span>
              <span></span>
              <span></span>
            </StyledHamburgerMenu>
          </StyledNav>
        </Container>
      </StyledWrapper>
      {isOpen && (
        <StyledMenuItems>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="/">services</Link>
            </li>
            <li>
              <Link to="/">our approach</Link>
            </li>
          </ul>
        </StyledMenuItems>
      )}
    </>
  );
};

export default Navbar;
