import React from "react";
import Container from "../Container/Container";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import {
  StyledWrapper,
  StyledFooter,
  StyledCopyright,
  StyledSocialIcons,
} from "./styles";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <StyledWrapper>
      <Container>
        <StyledFooter>
          <StyledCopyright>
            <p>
              &copy; {currentYear} glann media consult. all rights reserved.
            </p>
          </StyledCopyright>
          <StyledSocialIcons>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/glann_media_consult/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/glann-media-consult-3956b4281/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </StyledSocialIcons>
        </StyledFooter>
      </Container>
    </StyledWrapper>
  );
};

export default Footer;
