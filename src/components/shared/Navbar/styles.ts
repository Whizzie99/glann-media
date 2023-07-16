import styled from "styled-components";

interface StyledHamburgerMenuProps {
  readonly $isOpen?: boolean;
}

export const StyledWrapper = styled.div`
  position: fixed;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  backdrop-filter: brightness(90%) blur(20px);
  -webkit-backdrop-filter: brightness(90%) blur(20px);
  -moz-backdrop-filter: brightness(90%) blur(20px);
  padding: 2em 0;
  border-radius: 2em;
  z-index: 93;

  @media screen and (min-width: 1024px) {
    padding: 2em;
  }
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  flex: 0.8;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 1024px) {
    flex: 0.25;
  }
`;

export const StyledHamburgerMenu = styled.div<StyledHamburgerMenuProps>`
  display: block;
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;

  & span {
    display: block;
    width: 100%;
    height: 0.1em;
    background-color: var(--white);
    position: absolute;
    border-radius: 0.5em;
    transition: transform 0.3s ease;
  }

  & span:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.$isOpen ? "translateY(11px) rotate(45deg)" : "none"};
  }

  & span:nth-child(2) {
    top: 11px;
    transform: ${(props) => (props.$isOpen ? "scale(0)" : "none")};
  }

  & span:nth-child(3) {
    top: 22px;
    transform: ${(props) =>
      props.$isOpen ? "translateY(-11px) rotate(-45deg)" : "none"};
  }

  /* @media screen and (min-width: 1024px){
    
  } */
`;

export const StyledMenuItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-3);
  z-index: 90;

  ul {
    list-style: none;

    li {
      text-align: left;
      margin: 1em 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 2em;
        text-align: center;
        font-weight: 900;
        color: var(--gray-1);
        transition: all 0.3s ease;
      }

      &:hover {
        a {
          color: var(--white);
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    ul {
      li {
        a {
          font-size: 3em;
        }
      }
    }
  }
`;
