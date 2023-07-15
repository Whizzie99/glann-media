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

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const elements = elementsRef.current;

    const tl = gsap.timeline();

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power1.out" });
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
    <StyledWrapper id="about" ref={sectionRef}>
      <Container>
        <StyledContent>
          <StyledContentLeft>
            <StyledHeading>
              <h2 ref={addElementRef}>about us</h2>
              <GradientCircle />
            </StyledHeading>
            <p ref={addElementRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla
              fugiat amet aliquid quo sint est nam voluptates illum quod
              incidunt tempora id nisi rerum laboriosam necessitatibus, sunt
              magni placeat
            </p>
          </StyledContentLeft>
          <StyledContentRight>
            <StyledImg ref={addElementRef}>
              <img src={sample} alt="" />
            </StyledImg>
          </StyledContentRight>
        </StyledContent>
        <StyledAttractorHook>
          <h2 ref={addElementRef}>
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
