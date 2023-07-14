import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  /* margin: auto 0; */
  backdrop-filter: brightness(90%) blur(20px);
  -webkit-backdrop-filter: brightness(90%) blur(20px);
  -moz-backdrop-filter: brightness(90%) blur(20px);
  padding: 2em;
  border-radius: 2em;
  /* padding: 2em; */

  /* background: rgba(255,255,255,0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.2); */
  z-index: 99;
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  flex: 0.25;
  /* height: 5em; */

  img {
    width: 100%;
    /* height: 100% */
    object-fit: contain;
  }
`;

export const StyledHamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  span {
    height: 0.1em;
    width: 2em;
    background: var(--white);
    border-radius: 0.5em;
  }
`;
