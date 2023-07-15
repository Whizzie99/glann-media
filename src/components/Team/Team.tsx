import React from "react";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import {
  StyledWrapper,
  StyledHeading,
  StyledTeamGrid,
  StyledTeamCard,
  StyledCardImg,
  StyledCardContent,
  StyledContactIcons,
} from "./styles";

import sample from "../../assets/images/team-1.jpeg";

const Team = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledHeading>
          <div>
            <h2>meet the team</h2>
            <GradientCircle />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, illo.
          </p>
        </StyledHeading>
        <StyledTeamGrid>
          <StyledTeamCard>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="mailto:#">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
          <StyledTeamCard>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="mailto:#">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
          <StyledTeamCard>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="#" target="_blank">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
        </StyledTeamGrid>
      </Container>
    </StyledWrapper>
  );
};

export default Team;
