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
      tl.to(element, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(2)", stagger: {amount: 0.5} });
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
    <StyledWrapper id="services" ref={sectionRef}>
      <Container>
        <Styledheading>
          <div>
            <h2 ref={addElementRef}>our services</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            assumenda eius recusandae quisquam voluptatibus quas!
          </p>
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
