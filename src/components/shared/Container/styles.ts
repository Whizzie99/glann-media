import styled from "styled-components";

interface StyledContainerProps {
  readonly $width?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${(props) => (props.$width ? props.$width : "80%")};
  margin: 0 auto;
`;
