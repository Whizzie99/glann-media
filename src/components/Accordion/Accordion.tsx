import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { ourServicesData } from "../../data/services";
import {
  StyledWrapper,
  StyledAccordion,
  StyledHeading,
  StyleContent,
} from "./styles";

const Accordion: React.FC = () => {
  const [clicked, setClicked] = useState<boolean | number | null>(false);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <StyledWrapper>
      {ourServicesData.map((service) => (
        <StyledAccordion key={service.id}>
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
