import React from "react";
import Container from "../shared/Container/Container";
import { StyledWrapper, StyledServicesContent } from "./styles";

import stroke from "../../assets/images/stroke.png";

const OurServices: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledServicesContent>
          <h1>
            our{" "}
            <span>
              services
              <img src={stroke} alt="stroke" />
            </span>
          </h1>
          <p>
            Here, excellence is more than just a buzzword. It is at the heart
            and core of everything we do
          </p>
        </StyledServicesContent>
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
