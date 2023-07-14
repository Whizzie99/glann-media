import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { BsArrowUpRight } from "react-icons/bs";
import {
  StyledWrapper,
  StyledContent,
  StyledContentLeft,
  StyledContentRight,
  StyledHeading,
  StyledImg,
  StyledAttractorHook,
} from "./styles";

import sample from "../../assets/images/hero-img-black.jpg";
import hookImg from "../../assets/images/hook-img.png";

const About: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledContent>
          <StyledContentLeft>
            <StyledHeading>
              <h2>about us</h2>
              <GradientCircle />
            </StyledHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla
              fugiat amet aliquid quo sint est nam voluptates illum quod
              incidunt tempora id nisi rerum laboriosam necessitatibus, sunt
              magni placeat
            </p>
          </StyledContentLeft>
          <StyledContentRight>
            <StyledImg>
              <img src={sample} alt="" />
            </StyledImg>
          </StyledContentRight>
        </StyledContent>
        <StyledAttractorHook>
          <h2>
            power your business <img src={hookImg} alt="" /> with
            <br />
            creative{" "}
            <span>
              <BsArrowUpRight />
            </span>{" "}
            solutions
          </h2>
        </StyledAttractorHook>
      </Container>
    </StyledWrapper>
  );
};

export default About;
