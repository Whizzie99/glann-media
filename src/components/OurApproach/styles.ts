import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: var(--black-3);
  padding: 3em 0;
`;

export const StyledHeading = styled.div`
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

export const StyledGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3em auto;
  gap: 1em;
  width: 80%;
`;

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--black-4);
  border-radius: 1.25em;
  padding: 2em 1em;

  h3 {
    text-align: center;
    font-size: 1.8em;
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
    color: var(--white);

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
