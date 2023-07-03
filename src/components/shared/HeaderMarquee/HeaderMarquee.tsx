import React from "react";
import Marquee from "react-gsap-marquee";
import { StyledWrapper, StyledMarqueeText } from "./styles";

interface Props {
  text?: string;
}

const HeaderMarquee: React.FC<Props> = ({ text }) => {
  return (
    <StyledWrapper>
      <Marquee className="custom-marquee" isReversed>
        <StyledMarqueeText>{text}</StyledMarqueeText>
      </Marquee>
    </StyledWrapper>
  );
};

export default HeaderMarquee;
