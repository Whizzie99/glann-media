import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import Accordion from "../Accordion/Accordion";
import { BsArrowUpRight } from "react-icons/bs";
import { StyledWrapper, Styledheading, StyledAttractorHook } from "./styles";

import hookImg from "../../assets/images/hook-img.png";

gsap.registerPlugin(ScrollTrigger);

const OurServices: React.FC = () => {
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
    <StyledWrapper id="services">
      <Container>
        <Styledheading>
          <div>
            <h2 ref={addElementRef}>our services</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>Achieve a symphony of success</p>
        </Styledheading>
        <Accordion />
        <StyledAttractorHook ref={addElementRef}>
          <h2>
            excellence: our <img src={hookImg} alt="" /> heart our{" "}
            <span>
              <BsArrowUpRight />
            </span>{" "}
            core
          </h2>
        </StyledAttractorHook>
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
