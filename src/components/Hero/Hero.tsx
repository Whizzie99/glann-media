import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { StyledWrapper, StyledHeroContent, StyledHeroImg } from "./styles";

import sample from "../../assets/images/hero-img-2.jpeg";

const Hero: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledHeroContent>
        <h1>
          align and control <br /> your brand messaging
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium
          modi, tempore consequatur quia itaque ipsum, temporibus quod alias
          libero molestiae praesentium beatae.
        </p>
        <Link to="#">
          <span>get started</span>
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </StyledHeroContent>
      <StyledHeroImg>
        <img src={sample} alt="hero img" />
      </StyledHeroImg>
    </StyledWrapper>
  );
};

export default Hero;
