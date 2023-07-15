import React from "react";
import Container from "../Container/Container";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
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
                <a href="#" target="_blank">
                  <FaSquareFacebook />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter />
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
