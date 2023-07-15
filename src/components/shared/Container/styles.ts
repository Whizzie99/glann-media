import styled from "styled-components";

interface StyledContainerProps {
  readonly $width?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 85%;
  margin: 0 auto;

  @media screen and (min-width: 990px) {
    width: ${(props) => (props.$width ? props.$width : "80%")};
  }
`;
