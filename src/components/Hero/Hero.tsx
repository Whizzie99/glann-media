import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledHeroContent, StyledHeroImg } from "./styles";

import sample from "../../assets/images/hero-img-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
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
    <StyledWrapper>
      <StyledHeroContent>
        <h1 ref={addElementRef}>
          align and control <br /> your brand messaging
        </h1>
        <p ref={addElementRef}>
          Harness the power of communication to Align And Control your brand
          messaging, guiding it with precision and purpose to captivate your
          audience and forge lasting connections.
        </p>
        <a
          href="https://calendly.com/infoglannmedia/30min"
          target="_blank"
          ref={addElementRef}
          rel="noreferrer"
        >
          <span>get started</span>
          <span>
            <BsArrowRight />
          </span>
        </a>
      </StyledHeroContent>
      <StyledHeroImg ref={addElementRef}>
        <img src={sample} alt="hero img" />
      </StyledHeroImg>
    </StyledWrapper>
  );
};

export default Hero;
