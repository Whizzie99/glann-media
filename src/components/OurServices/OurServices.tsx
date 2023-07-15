import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import Accordion from "../Accordion/Accordion";
import { BsArrowUpRight } from "react-icons/bs";
import { StyledWrapper, Styledheading, StyledAttractorHook } from "./styles";

import hookImg from "../../assets/images/hook-img.png";

const OurServices: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <StyledWrapper id="services">
      <Container>
        <Styledheading>
          <div>
            <h2>our services</h2>
            <GradientCircle />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            assumenda eius recusandae quisquam voluptatibus quas!
          </p>
        </Styledheading>
        <Accordion />
        <StyledAttractorHook>
          <h2>
            excellence: our <img src={hookImg} alt="" /> heart
            <br />
            our{" "}
            <span>
              <BsArrowUpRight />
            </span>{" "}
            core
          </h2>
        </StyledAttractorHook>
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
