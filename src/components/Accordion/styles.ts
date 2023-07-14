import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWrapper = styled.div`
  margin: 3em auto;
  width: 70%;
`;

export const StyledAccordion = styled.div`
  padding: 2em 0;
  border-top: 0.1em solid var(--gray-2);
  cursor: pointer;
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 2.3em;
    font-weight: 800;
    text-transform: capitalize;
    color: var(--gray-2);
    transition: all 0.3s ease;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    color: var(--gray-2);
    transition: all 0.3s ease;
  }

  &:hover {
    h3 {
      color: var(--white);
    }

    span {
      color: var(--white);
    }
  }
`;

export const StyleContent = styled(motion.div)`
  font-size: 1.1em;
  line-height: 1.5;
  color: var(--gray-2);
  overflow: hidden;
`;
