import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { BsArrowUpRight } from "react-icons/bs";
import {
  StyledWrapper,
  StyledContent,
  StyledContentLeft,
  StyledContentRight,
  StyledHeading,
  StyledImg,
  StyledAttractorHook,
} from "./styles";

import sample from "../../assets/images/hero-img-black.jpg";
import hookImg from "../../assets/images/hook-img.png";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const location = useLocation();

  // const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    // const sectionElement = sectionRef.current;
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

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <StyledWrapper id="about">
      <Container>
        <StyledContent>
          <StyledContentLeft>
            <StyledHeading>
              <h2 ref={addElementRef}>about us</h2>
              <GradientCircle />
            </StyledHeading>
            <p ref={addElementRef}>
              GLANN Media Consult Ltd. is a strategic communications company
              dedicated to helping businesses and organisations effectively
              convey their message, build strong relationships, and achieve
              their goals through the power of communication.
            </p>
          </StyledContentLeft>
          <StyledContentRight>
            <StyledImg ref={addElementRef}>
              <img src={sample} alt="" />
            </StyledImg>
          </StyledContentRight>
        </StyledContent>
        <StyledAttractorHook ref={addElementRef}>
          <h2>
            power your business <img src={hookImg} alt="" /> with creative{" "}
            <span>
              <BsArrowUpRight />
            </span>{" "}
            solutions
          </h2>
        </StyledAttractorHook>
      </Container>
    </StyledWrapper>
  );
};

export default About;
