import styled from "styled-components";

export const StyledWrapper = styled.footer`
  background-color: var(--black-3);
  padding: 1em 0;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledCopyright = styled.div`
  p {
    color: var(--gray-1);
    font-size: 1.03em;
    text-transform: capitalize;
    font-weight: 300;
  }

  @media screen and (max-width: 767px) {
    order: 2;

    p {
      text-align: center;
    }
  }
`;

export const StyledSocialIcons = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 0.8em;

    li {
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: var(--gray-1);
        font-size: 1.3em;
      }
    }
  }

  @media screen and (max-width: 900px) {
    order: 1;

    ul {
      li {
        a {
          font-size: 1.1em;
        }
      }
    }
  }
`;
