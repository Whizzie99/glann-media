import React from "react";
import { StyledContainer } from "./styles";

interface Props {
  width?: string;
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({width, children}) => {
  return (
    <StyledContainer $width={width}>
      {children}
    </StyledContainer>
  );
}
 
export default Container;