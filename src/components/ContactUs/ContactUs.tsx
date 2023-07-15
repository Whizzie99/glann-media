import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Container from "../shared/Container/Container";
import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledSection, StyledCta } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const ContactUs: React.FC = () => {
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
    <StyledWrapper id="contact" ref={sectionRef}>
      <Container>
        <StyledSection>
          <h2 ref={addElementRef}>let&apos;s discuss your ideas</h2>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus sequi facere esse dolorum minus, numquam delectus
            molestias veritatis incidunt voluptatibus
          </p>
          <StyledCta ref={addElementRef}>
            <a href="#" target="_blank" rel="noopenner noreferrer">
              <span>schedule a consult</span>
              <span>
                <BsArrowRight />
              </span>
            </a>
          </StyledCta>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default ContactUs;
