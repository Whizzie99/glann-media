import React from "react";
import Container from "../Container/Container";
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
                  facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  linkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  twitter
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
