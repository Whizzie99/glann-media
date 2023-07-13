import React from "react";
import Marquee from "react-gsap-marquee";
import { StyledWrapper, StyledMarqueeText } from "./styles";

// interface Props {
//   text?: string;
// }

const CustomMarquee: React.FC = () => {
  return (
    <StyledWrapper>
      <Marquee className="custom-marquee" isReversed>
        <StyledMarqueeText>
          <p className="custom-text">discover your ideas</p><span className="custom-circle"></span>
        </StyledMarqueeText>
      </Marquee>
    </StyledWrapper>
  );
};

export default CustomMarquee;
