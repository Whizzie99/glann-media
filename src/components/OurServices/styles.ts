import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 10em 0;
  padding-bottom: 3em;
  background: var(--black-2);
`;

export const StyledServicesHeading = styled.div`
  h3 {
    text-align: center;
    color: var(--white);
    text-transform: capitalize;
    font-size: 3em;
    font-weight: 900;
    margin-top: 2em;

    > span {
      position: relative;

      img {
        position: absolute;
        bottom: -0.2em;
        left: 0;
        width: 100%;
      }
    }
  }

  p {
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3em;
    color: var(--white);
    width: 70%;
    text-align: center;
    font-weight: 300;
  }
`;

export const StyledServicesCarousel = styled.div`
  position: relative;
  margin-top: 2em;
  padding: 2em 0;

  .swiper {
    position: static;

    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 5px;
    }

    .swiper-pagination-bullet {
      background: var(--white);
    }

    .swiper-pagination-bullet-active {
      background: var(--purple);
    }
  }
`;
