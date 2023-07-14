import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import Accordion from "../Accordion/Accordion";
import { BsArrowUpRight } from "react-icons/bs";
import { StyledWrapper, Styledheading, StyledAttractorHook } from "./styles";

import hookImg from "../../assets/images/hook-img.png";

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
        <StyledAttractorHook>
          <h2>
            excellence: our <img src={hookImg} alt="" /> heart
            <br />
            our{" "}
            <span>
              <BsArrowUpRight />
            </span>{" "}
            core
          </h2>
        </StyledAttractorHook>
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
