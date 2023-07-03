import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebebeb;
  padding: 1.5em;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.1s ease-out;

  > h3 {
    text-transform: capitalize;
    text-align: center;
  }

  > p {
    font-weight: 300;
    margin-top: 1em;
    text-align: center;
  }

  &:hover {
    background: var(--purple);
  }
`;

export const StyledIcon = styled.div`
  margin-bottom: 0.5em;
`;

export const StyledReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3em;
  margin: 1em 0;
  padding: 0.6em;
  background: transparent;
  border: none;
  text-transform: capitalize;
  font-family: 0.9em;
  text-decoration: underline;
  cursor: pointer;

  span:last-child {
    margin-top: 0.3em;
  }
`;
