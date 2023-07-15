import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { approachesData } from "../../data/approaches";
import {
  StyledWrapper,
  StyledHeading,
  StyledGridItems,
  StyledGridItem,
} from "./styles";

const OurApproach: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledHeading>
          <div>
            <h2>our approach</h2>
            <GradientCircle />
          </div>
          <p>
            Tailored solutions for exceptional results that exceed client
            expectations
          </p>
        </StyledHeading>
        <StyledGridItems>
          {approachesData.map((approach) => (
            <StyledGridItem key={approach.id}>
              <h3>{approach.title}</h3>
              <p>{approach.description}</p>
            </StyledGridItem>
          ))}
        </StyledGridItems>
      </Container>
    </StyledWrapper>
  );
};

export default OurApproach;
