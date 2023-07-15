import React from "react";
import Marquee from "react-gsap-marquee";
import GradientCircle from "../GradientCircle/GradientCircle";
import { StyledWrapper, StyledMarqueeText } from "./styles";

// interface Props {
//   text?: string;
// }

const CustomMarquee: React.FC = () => {
  return (
    <StyledWrapper>
      <Marquee className="custom-marquee" isReversed>
        <StyledMarqueeText>
          <p className="custom-text">discover your ideas</p>
          <GradientCircle height="0.6em" width="0.6em" />
        </StyledMarqueeText>
      </Marquee>
    </StyledWrapper>
  );
};

export default CustomMarquee;
