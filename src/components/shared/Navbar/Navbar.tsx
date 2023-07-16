import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../Container/Container";
import {
  StyledWrapper,
  StyledLogo,
  StyledHamburgerMenu,
  StyledNav,
  StyledMenuItems,
} from "./styles";

import logo from "../../../assets/images/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHideMenu = () => {
    setIsOpen(false);
  };

  const redirectToHome = (): void => {
    return navigate("/", { replace: true });
  };

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ paused: true });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.progress(0).pause();
        },
        onLeaveBack: () => {
          tl.progress(0).pause();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
              <Link to="/" ref={addElementRef}>
                home
              </Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#about" ref={addElementRef}>
                about
              </Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#services" ref={addElementRef}>
                services
              </Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#approaches" ref={addElementRef}>
                our approach
              </Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#contact" ref={addElementRef}>
                contact us
              </Link>
            </li>
          </ul>
        </StyledMenuItems>
      )}
    </>
  );
};

export default Navbar;
