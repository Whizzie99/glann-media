import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWrapper = styled.div`
  margin: 3em auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

export const StyledAccordion = styled.div`
  padding: 1em 0;
  border-top: 0.1em solid var(--gray-2);
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    padding: 2em 0;
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.7em;
    font-weight: 800;
    text-transform: capitalize;
    color: var(--gray-2);
    transition: all 0.3s ease;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
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

  @media screen and (min-width: 992px) {
    h3 {
      font-size: 2.3em;
    }

    span {
      font-size: 2.5em;
    }
  }
`;

export const StyleContent = styled(motion.div)`
  font-size: 1.1em;
  line-height: 1.5;
  color: var(--gray-2);
  overflow: hidden;
`;
