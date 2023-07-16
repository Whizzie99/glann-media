import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-3);
  padding: 5em 0;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  /* margin-bottom: 3em; */

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 2em;
  }
`;

export const StyledContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    width: 100%;
    line-height: 1.5;
    font-size: 1.1em;
    font-weight: 300;
    color: var(--white);
  }

  @media screen and (min-width: 1024px) {
    width: 50%;

    p {
      width: 80%;
    }
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  gap: 0.3em;

  h2 {
    font-size: 2.3em;
    font-weight: 900;
    color: var(--gray-1);
    text-transform: uppercase;
  }

  > span {
    margin-top: 2em;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 3em;
    }

    > span {
      margin-top: 2.4em;
    }
  }
`;

export const StyledContentRight = styled.div`
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const StyledImg = styled.div`
  position: relative;
  width: 100%;
  height: 25em;

  img {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.6em;
    right: -0.6em;
    height: 100%;
    width: 100%;
    background: var(--primary-gradient);
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
    height: 30em;

    &::after {
      top: 1em;
      right: -1em;
    }
  }
`;

export const StyledAttractorHook = styled.div`
  margin: 3em 0;
  margin-top: 10em;
  /* margin-bottom: 2em; */
  padding: 2em 0;
  background: var(--black-4);
  border-radius: 1.25em;
  width: 100%;

  h2 {
    text-align: center;
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.8em;
    font-weight: 900;
    margin: 0 auto;
    width: 100%;

    img {
      height: 0.8em;
      width: 2em;
      object-fit: cover;
      border-radius: 2em;
    }

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 2em;
      height: 1em;
      background: var(--primary-gradient);
      font-size: 0.7em;
      border-radius: 2em;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 2.6em;
      width: 60%;
    }
  }
`;
