import React, {useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import GradientCircle from "../shared/GradientCircle/GradientCircle";
import { clientsData } from "../../data/clients";
import {
  StyledWrapper,
  StyledHeading,
  StyledCarousel,
  StyledClientImg,
} from "./styles";

import "swiper/css";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);


const OurClients: React.FC = () => {

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
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "back.out(2)" });
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
            <h2 ref={addElementRef}>our clients</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint
            voluptates aliquid ut, voluptatibus ea
          </p>
        </StyledHeading>
        <StyledCarousel ref={addElementRef}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                // spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                // spaceBetween: 50,
              },
            }}
          >
            {clientsData.map((client) => (
              <SwiperSlide key={client.id}>
                <StyledClientImg>
                  <img src={client.img} alt="" />
                </StyledClientImg>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledCarousel>
      </Container>
    </StyledWrapper>
  );
};

export default OurClients;
