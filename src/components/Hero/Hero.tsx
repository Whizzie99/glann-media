import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledHeroContent, StyledHeroImg } from "./styles";

import sample from "../../assets/images/hero-img-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
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

  return (
    <StyledWrapper>
      <StyledHeroContent>
        <h1 ref={addElementRef}>
          align and control <br /> your brand messaging
        </h1>
        <p ref={addElementRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium
          modi, tempore consequatur quia itaque ipsum, temporibus quod alias
          libero molestiae praesentium beatae.
        </p>
        <Link to="#" ref={addElementRef}>
          <span>get started</span>
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </StyledHeroContent>
      <StyledHeroImg ref={addElementRef}>
        <img src={sample} alt="hero img" />
      </StyledHeroImg>
    </StyledWrapper>
  );
};

export default Hero;
