import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    <StyledWrapper id="approaches">
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
