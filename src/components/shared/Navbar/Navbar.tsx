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
  const sectionRef = useRef<HTMLDivElement>(null);
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
    const sectionElement = sectionRef.current;
    const elements = elementsRef.current;

    const tl = gsap.timeline();

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "back.out(2)"});
    });

    const sectionId = sectionElement?.id;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
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

    if (sectionId) {
      ScrollTrigger.getById(sectionId)?.kill();
    }

    return () => {
      tl.kill();
      scrollTrigger.kill();
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
        <StyledMenuItems ref={sectionRef}>
          <ul>
            <li onClick={handleHideMenu} >
              <Link to="/" ref={addElementRef}>home</Link>
            </li>
            <li onClick={handleHideMenu} >
              <Link to="/#about" ref={addElementRef}>about</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#services" ref={addElementRef}>services</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#approaches"ref={addElementRef} >our approach</Link>
            </li>
            <li onClick={handleHideMenu}>
              <Link to="/#contact" ref={addElementRef}>contact us</Link>
            </li>
          </ul>
        </StyledMenuItems>
      )}
    </>
  );
};

export default Navbar;
