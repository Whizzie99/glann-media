import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-2);
`;

export const StyledServicesContent = styled.div`
  h1 {
    text-align: center;
    color: var(--white);
    text-transform: capitalize;
    font-size: 3.5em;
    font-weight: 900;

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
