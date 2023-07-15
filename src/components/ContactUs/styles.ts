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
  padding: 6em 0;
  border-bottom-left-radius: 5em;
  border-bottom-right-radius: 5em;

  h2{
    font-size: 3em;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--white);
    width: 50%;
    text-align: center;
    line-height: 1.2;
  }

  p{
    width: 55%;
    text-align: center;
    color: var(--white);
    font-size: 1.1em;
    font-weight: 300;
  }
`;

export const StyledCta = styled.div`
  width: 25%;
  border: 0.1em solid var(--white);
  padding: 0.5em;
  border-radius: 0.625em;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    color: var(--white);
    font-size: 1.2em;
    text-transform: capitalize;

    span:last-child{
      margin-top: 0.3em;
      font-size: 1.4em;
    }
  }
`;