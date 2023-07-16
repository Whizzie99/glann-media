import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: var(--black-3);
  padding: 3em 0;
`;

export const StyledHeading = styled.div`
  width: 100%;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;
    gap: 0.3em;

    h2 {
      text-align: center;
      font-size: 2.3em;
      font-weight: 900;
      color: var(--gray-1);
      text-transform: uppercase;
    }

    > span {
      margin-top: 1.9em;
    }
  }

  p {
    text-align: center;
    font-size: 1.1em;
    color: var(--white);
    font-weight: 300;
    line-height: 1.5;
  }

  @media screen and (min-width: 992px) {
    width: 40%;

    > div {
      h2 {
        font-size: 3em;
      }

      > span {
        margin-top: 2.4em;
      }
    }
  }
`;

export const StyledCarousel = styled.div`
  margin: 2.5em 0;

  .swiper {
    .swiper-wrapper {
      transition-timing-function: linear;
    }
  }
`;

export const StyledClientImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;
