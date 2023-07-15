import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../shared/Container/Container";
import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledSection, StyledCta } from "./styles";

const ContactUs: React.FC = () => {
  const location = useLocation();

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
          <h2>let&apos;s discuss your ideas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus sequi facere esse dolorum minus, numquam delectus
            molestias veritatis incidunt voluptatibus
          </p>
          <StyledCta>
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
