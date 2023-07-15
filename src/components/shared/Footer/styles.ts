import styled from "styled-components";

export const StyledWrapper = styled.footer`
  background-color: var(--black-3);
  padding: 1em 0;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCopyright = styled.div`
  p{
    color: var(--gray-1);
    font-size: 1.03em;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export const StyledSocialIcons = styled.div`
  ul{
    list-style: none;
    display: flex;
    gap: 0.8em;

    li{
      a{
        text-decoration: none;
        text-transform: capitalize;
        color: var(--gray-1);
      }
    }
  }
`;
