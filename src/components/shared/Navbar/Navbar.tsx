import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHideMenu = () => {
    setIsOpen(false);
  };

  const redirectToHome = (): void => {
    return navigate("/", { replace: true });
  };

  return (
    <>
      <StyledWrapper>
        <Container width="90%">
          <StyledNav>
            <StyledLogo onClick={redirectToHome}>
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
            <li onClick={handleHideMenu}>
              <Link to="/">home</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#about">about</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#services">services</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#approaches">our approach</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#contact">contact us</Link>
            </li>
          </ul>
        </StyledMenuItems>
      )}
    </>
  );
};

export default Navbar;
