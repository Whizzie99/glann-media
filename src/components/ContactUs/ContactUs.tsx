import React from "react";
import Container from "../shared/Container/Container";
import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledSection, StyledCta } from "./styles";

const ContactUs: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>let&apos;s discuss your ideas</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus sequi facere esse dolorum minus, numquam delectus molestias veritatis incidunt voluptatibus</p>
          <StyledCta>
            <a href="#" target="_blank" rel="noopenner noreferrer">
              <span>schedule a consult</span>
              <span>
                <BsArrowRight/>
              </span>
            </a>
          </StyledCta>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
}
 
export default ContactUs;