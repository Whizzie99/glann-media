import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: var(--black-3);
  padding: 3em 0;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  align-items: center;
  background: var(--primary-gradient);
  padding: 4em 1em;
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 3em;

  h2 {
    font-size: 2.3em;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--white);
    width: 100%;
    text-align: center;
    line-height: 1.2;
  }

  p {
    width: 90%;
    text-align: center;
    color: var(--white);
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px){
    h2{
      width: 70%;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 6em 0;
    border-bottom-left-radius: 5em;
    border-bottom-right-radius: 5em;

    h2 {
      font-size: 3em;
      width: 50%;
    }

    p {
      width: 55%;
    }
  }
`;

export const StyledCta = styled.div`
  width: 90%;
  border: 0.1em solid var(--white);
  padding: 0.5em;
  border-radius: 0.625em;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    color: var(--white);
    font-size: 1.1em;

    span:last-child {
      margin-top: 0.3em;
      font-size: 1.1em;
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;

    a {
      font-size: 1.2em;

      span:last-child {
        font-size: 1.4em;
      }
    }
  }
`;
