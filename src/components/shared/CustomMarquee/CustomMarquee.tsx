import React from "react";
import Marquee from "react-gsap-marquee";
import { valuesData } from "../../../data/values";
import { StyledWrapper, StyledMarqueeText } from "./styles";

const CustomMarquee: React.FC = () => {
  return (
    <StyledWrapper>
      <Marquee className="custom-marquee" isReversed>
        <StyledMarqueeText>
          <div className="custom-text">
            {valuesData.map((v) => (
              <p key={v.id}>
                <span className="custom-span">{v.text}</span>
                <span className="custom-circle"></span>
              </p>
            ))}
          </div>
        </StyledMarqueeText>
      </Marquee>
    </StyledWrapper>
  );
};

export default CustomMarquee;
