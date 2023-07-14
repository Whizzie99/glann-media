import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import Accordion from "../Accordion/Accordion";
import { StyledWrapper, Styledheading } from "./styles";

const OurServices: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <Styledheading>
          <div>
            <h2>our services</h2>
            <GradientCircle />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            assumenda eius recusandae quisquam voluptatibus quas!
          </p>
        </Styledheading>
        <Accordion />
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
