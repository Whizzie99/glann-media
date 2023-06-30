import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { StyledHero, StyledHeroLeft, StyledHeroRight, StyledHeroLeftContent } from "./styles";
import { Link } from "react-router-dom";

import sample from '../../assets/images/hero-img-black.jpg';

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledHeroLeftContent>
          <h1>Align and control <br />your brand messaging<br/>using tailored strategic<br/>
          communications
          </h1>
          <Link to='/'>
            <span>get started</span>
            <span><FiArrowUpRight/></span>
          </Link>
        </StyledHeroLeftContent>
      </StyledHeroLeft>
      <StyledHeroRight>
        <img src={sample} alt="" />
      </StyledHeroRight>
    </StyledHero>
  );
}
 
export default Hero;