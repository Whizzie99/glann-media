import styled from "styled-components";

interface StyledCircleProps {
  readonly $width?: string;
  readonly $height?: string;
}

export const StyledCircle = styled.span<StyledCircleProps>`
  height: ${(props) => (props.$height ? props.$height : "0.7em")};
  width: ${(props) => (props.$width ? props.$width : "0.7em")};
  border-radius: 50%;
  background: var(--primary-gradient);
`;
