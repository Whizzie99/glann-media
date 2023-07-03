import styled from "styled-components";

export const StyledWrapper = styled.div`
  .custom-marquee {
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
  -webkit-text-stroke-width: 0.01em;
  -webkit-text-stroke-color: var(--purple);
`;
