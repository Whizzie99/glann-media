import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
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

import sample from "../../assets/images/clients/adewunmi.png";

const OurClients: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledHeading>
          <div>
            <h2>our clients</h2>
            <GradientCircle />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint
            voluptates aliquid ut, voluptatibus ea
          </p>
        </StyledHeading>
        <StyledCarousel>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
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
