import React, {useEffect, useRef} from "react";
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

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const elements = elementsRef.current;

    const tl = gsap.timeline();

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });
      tl.to(element, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(2)", stagger: {amount: 0.5} });
    });

    const sectionId = sectionElement?.id;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
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

    if (sectionId) {
      ScrollTrigger.getById(sectionId)?.kill();
    }

    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  }, []);

  return (
    <StyledWrapper ref={sectionRef}>
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
