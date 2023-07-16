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
