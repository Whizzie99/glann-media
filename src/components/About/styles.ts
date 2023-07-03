import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 10em 0;
  padding-bottom: 3em;
  background: var(--black-2);

  h3 {
    text-align: center;
    color: var(--white);
    text-transform: capitalize;
    font-size: 3em;
    font-weight: 900;
    margin-top: 2em;

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

  .custom-marque {
    > div {
      gap: 1em;
    }
  }
`;

export const StyledMarqueeText = styled.div`
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 900;
  color: transparent;
  /* -webkit-text-fill-color: var(--black-2); */
  -webkit-text-stroke-width: 0.01em;
  -webkit-text-stroke-color: var(--purple);
  /* margin-left: 2em !important; */
`;
