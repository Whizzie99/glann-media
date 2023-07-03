import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { ourServicesData } from "../../data/services";
import Container from "../shared/Container/Container";
import HeaderMarquee from "../shared/HeaderMarquee/HeaderMarquee";
import ServiceCard from "./ServiceCard/ServiceCard";
import {
  StyledWrapper,
  StyledServicesHeading,
  StyledServicesCarousel,
} from "./styles";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import stroke from "../../assets/images/stroke.png";

// INTERFACE
type OurServiceData = {
  id: number;
  title: string;
  description: string;
  img: string;
};

const OurServices: React.FC = () => {
  return (
    <StyledWrapper>
      <HeaderMarquee text="our serices" />
      <Container>
        <StyledServicesHeading>
          <h3>
            <span>
              Excellence:
              <img src={stroke} alt="stroke" />
            </span>{" "}
            Our Heart,
            <br />
            Our Core
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus cupiditate nihil quidem aperiam necessitatibus suscipit
            esse quas quam labore. Eaque
          </p>
        </StyledServicesHeading>
        <StyledServicesCarousel>
          <Swiper
            spaceBetween={20}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {ourServicesData.map((ourService: OurServiceData) => (
              <SwiperSlide key={ourService.id}>
                <ServiceCard
                  img={ourService.img}
                  title={ourService.title}
                  description={ourService.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledServicesCarousel>
      </Container>
    </StyledWrapper>
  );
};

export default OurServices;
