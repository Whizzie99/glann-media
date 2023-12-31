import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import {
  StyledWrapper,
  StyledHeading,
  StyledTeamGrid,
  StyledTeamCard,
  StyledCardImg,
  StyledCardContent,
  StyledContactIcons,
} from "./styles";

import sample from "../../assets/images/team-1.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ paused: true });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.progress(0).pause();
        },
        onLeaveBack: () => {
          tl.progress(0).pause();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <StyledHeading>
          <div>
            <h2 ref={addElementRef}>meet the team</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, illo.
          </p>
        </StyledHeading>
        <StyledTeamGrid>
          <StyledTeamCard ref={addElementRef}>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="mailto:#">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
          <StyledTeamCard ref={addElementRef}>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="mailto:#">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
          <StyledTeamCard ref={addElementRef}>
            <StyledCardImg>
              <img src={sample} alt="" />
            </StyledCardImg>
            <StyledCardContent>
              <h4>john doe</h4>
              <StyledContactIcons>
                <span>
                  <a href="mailto:#">
                    <FaEnvelope />
                  </a>
                </span>
                <span>
                  <a href="#" target="_blank">
                    <FaLinkedin />
                  </a>
                </span>
              </StyledContactIcons>
            </StyledCardContent>
          </StyledTeamCard>
        </StyledTeamGrid>
      </Container>
    </StyledWrapper>
  );
};

export default Team;
