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
    <StyledWrapper id="contact">
      <Container>
        <StyledSection>
          <h2 ref={addElementRef}>let&apos;s discuss your ideas</h2>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus sequi facere esse dolorum minus, numquam delectus
            molestias veritatis incidunt voluptatibus
          </p>
          <StyledCta ref={addElementRef}>
            <a href="https://calendly.com/wisdom-a8u/30min" target="_blank" rel="noopenner noreferrer">
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
