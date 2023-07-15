import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { approachesData } from "../../data/approaches";
import {
  StyledWrapper,
  StyledHeading,
  StyledGridItems,
  StyledGridItem,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);


const OurApproach: React.FC = () => {
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
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "back.out(2)" });
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
    <StyledWrapper id="approaches" ref={sectionRef}>
      <Container>
        <StyledHeading>
          <div>
            <h2 ref={addElementRef}>our approach</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>
            Tailored solutions for exceptional results that exceed client
            expectations
          </p>
        </StyledHeading>
        <StyledGridItems>
          {approachesData.map((approach) => (
            <StyledGridItem key={approach.id} ref={addElementRef}>
              <h3>{approach.title}</h3>
              <p>{approach.description}</p>
            </StyledGridItem>
          ))}
        </StyledGridItems>
      </Container>
    </StyledWrapper>
  );
};

export default OurApproach;
