import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { StyledCard, StyledIcon, StyledReadMoreBtn } from "./styles";

import sample from "../../../assets/icons/services-icons/media-relations-black.png";

interface Props {
  img: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ img, title, description }) => {
  return (
    <StyledCard>
      <StyledIcon>
        <img src={img || sample} alt="" />
      </StyledIcon>
      <h3>{title}</h3>
      <p>{description.substring(0, 100)}...</p>
      <StyledReadMoreBtn>
        <span>read more</span>
        <span>
          <FiArrowRight />
        </span>
      </StyledReadMoreBtn>
    </StyledCard>
  );
};

export default ServiceCard;
