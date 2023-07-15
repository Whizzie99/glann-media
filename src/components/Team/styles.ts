import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-3);
  padding: 2em 0;
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

export const StyledTeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 3em;
  margin-top: 2em;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledTeamCard = styled.div``;

export const StyledCardImg = styled.div`
  position: relative;
  height: 20em;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1.25em;
    position: relative;
    z-index: 2;
  }

  &::after {
    content: "";
    top: 0.4em;
    right: -0.4em;
    height: 100%;
    width: 100%;
    position: absolute;
    background: var(--primary-gradient);
    border-radius: 1.25em;
  }
`;

export const StyledCardContent = styled.div`
  margin-top: 1em;

  h4 {
    text-align: center;
    text-transform: capitalize;
    font-weight: 400;
    color: var(--gray-1);
    font-size: 1.3em;
  }
`;

export const StyledContactIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.3em;

  span {
    font-size: 1.3em;

    a {
      color: var(--gray-1);
    }
  }
`;
