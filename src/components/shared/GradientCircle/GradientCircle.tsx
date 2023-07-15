import React from "react";
import { StyledCircle } from "./styles";

interface Props {
  width?: string;
  height?: string;
}

const GradientCircle: React.FC<Props> = ({ width, height }) => {
  return <StyledCircle $width={width} $height={height}></StyledCircle>;
};

export default GradientCircle;
