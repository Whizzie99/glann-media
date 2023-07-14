import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--black-3);
  padding: 5em 0;
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 2em;
`;

export const StyledContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p{
    width: 80%;
    line-height: 1.5;
    font-size: 1.1em;
    font-weight: 300;
    color: var(--white);
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  gap: 0.3em;

  h2{
    font-size: 3em;
    color: var(--gray-1);
    text-transform: uppercase;
  }

  > span{
    margin-top: 2.4em;
    /* align-self: flex-end; */
    /* margin-top: -1em; */
  }
`;

export const StyledContentRight = styled.div`
  width: 50%;
`;

export const StyledImg = styled.div`
  position: relative;
  width: 80%;
  height: 30em;

  img{
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
    z-index: 99;
  }

  &::after{
    content: "";
    position: absolute;
    top: 1em;
    right: -1em;
    height: 100%;
    width: 100%;
    background: var(--primary-gradient);
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
  }
`;
