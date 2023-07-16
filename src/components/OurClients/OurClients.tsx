import React, { useEffect, useRef } from "react";
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
            <h2 ref={addElementRef}>our clients</h2>
            <GradientCircle />
          </div>
          <p ref={addElementRef}>
            We wouldn&apos;t want you to take only our word for it
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
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
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
