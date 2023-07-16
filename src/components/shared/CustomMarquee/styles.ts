import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-2);
  padding: 1em 0;

  .custom-marquee {
    > div {
      gap: 1em;
    }
  }
`;

export const StyledMarqueeText = styled.div`
  .custom-text {
    display: flex;
    align-items: center;
    gap: 2em;
    p {
      display: flex;
      align-items: center;
      gap: 0.2em;

      .custom-span {
        font-size: 1.3em;
        background: var(--primary-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
      }

      .custom-circle {
        height: 0.6em;
        width: 0.6em;
        border-radius: 50%;
        background: var(--primary-gradient);
        margin-top: 0.4em;
      }
    }
  }
`;
