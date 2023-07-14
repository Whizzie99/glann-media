import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-3);
  padding: 2em 0;
`;

export const Styledheading = styled.div`
  width: 40%;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;
    gap: 0.3em;

    h2 {
      text-align: center;
      font-size: 3em;
      font-weight: 900;
      color: var(--gray-1);
      text-transform: uppercase;
    }

    > span {
      margin-top: 2.4em;
    }
  }

  p {
    text-align: center;
    font-size: 1.1em;
    color: var(--white);
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const StyledAttractorHook = styled.div`
  margin: 5em 0;
  padding: 2em 0;
  background: var(--black-4);
  border-radius: 1.25em;

  h2 {
    text-align: center;
    color: var(--white);
    text-transform: uppercase;
    font-size: 2.6em;
    font-weight: 900;

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
`;