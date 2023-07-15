import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { ourServicesData } from "../../data/services";
import {
  StyledWrapper,
  StyledAccordion,
  StyledHeading,
  StyleContent,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const Accordion: React.FC = () => {
  const [clicked, setClicked] = useState<boolean | number | null>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const elements = elementsRef.current;

    const tl = gsap.timeline();

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });
      tl.to(element, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)", stagger: {amount: 0.5} });
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
    <StyledWrapper ref={sectionRef}>
      {ourServicesData.map((service) => (
        <StyledAccordion key={service.id} ref={addElementRef}>
          <StyledHeading onClick={() => toggle(service.id)}>
            <h3
              style={{
                color: `${clicked === service.id ? "white" : "#5F5F5F"}`,
              }}
            >
              {service.title}
            </h3>
            <span
              style={{
                color: `${clicked === service.id ? "white" : "#5F5F5F"}`,
              }}
            >
              {clicked === service.id ? (
                <BsArrowDownRight />
              ) : (
                <BsArrowUpRight />
              )}
            </span>
          </StyledHeading>
          <AnimatePresence>
            {clicked === service.id ? (
              <StyleContent
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p
                  style={{
                    color: `${clicked === service.id ? "white" : "#5F5F5F"}`,
                  }}
                >
                  {service.description}
                </p>
              </StyleContent>
            ) : null}
          </AnimatePresence>
        </StyledAccordion>
      ))}
    </StyledWrapper>
  );
};

export default Accordion;
