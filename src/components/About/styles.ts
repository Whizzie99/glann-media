import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 10em 0;
  background: var(--black-2);

  h2 {
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
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5em;
    color: var(--white);
    width: 80%;
    text-align: center;
    font-weight: 300;
  }
`;
