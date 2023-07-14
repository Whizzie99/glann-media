import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import {
  StyledWrapper,
  StyledContent,
  StyledContentLeft,
  StyledContentRight,
  StyledHeading,
  StyledImg,
} from "./styles";

import sample from "../../assets/images/hero-img-black.jpg";

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
      </Container>
    </StyledWrapper>
  );
};

export default About;
