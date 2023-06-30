import React from "react";
import Container from "../shared/Container/Container";
import HeaderMarquee from "../shared/HeaderMarquee/HeaderMarquee";

import { StyledWrapper } from "./styles";

import stroke from "../../assets/images/stroke.png";

const About: React.FC = () => {
  return (
    <StyledWrapper>
      <HeaderMarquee text="about us" />
      <Container>
        <h3>
          power your business with
          <br />
          <span>
            creative
            <img src={stroke} alt="" />
          </span>{" "}
          Solutions
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dolorem? Corrupti earum, enim optio odit repellendus exercitationem at
          cum quia expedita aliquam quisquam! Officia modi autem enim
          cupiditate? Ex asperiores ullam nesciunt eligendi optio doloremque
          distinctio eius voluptates quod eum
        </p>
      </Container>
    </StyledWrapper>
  );
};

export default About;
