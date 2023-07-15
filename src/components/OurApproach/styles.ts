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
      font-size: 2.5em;
      font-weight: 900;
      color: var(--gray-1);
      text-transform: uppercase;
      white-space: nowrap;
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

  @media screen and (min-width: 1024px) {
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

export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 3em auto;
  gap: 2em;
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    gap: 1em;
  }
`;

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--black-4);
  border-radius: 1.25em;
  padding: 1em;

  h3 {
    text-align: center;
    font-size: 1.6em;
    text-transform: capitalize;
    margin-bottom: 0.3em;
    background: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    text-align: center;
    width: 80%;
    font-weight: 300;
    font-size: 1.1em;
    color: var(--white);

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2em 1em;

    h3 {
      font-size: 1.8em;
    }
  }
`;
