import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(48deg, #BF00FF 0%, #750CE8 100%);
`;

export const StyledHeroContent = styled.div`
  margin-top: 10em;
  margin-bottom: 3em;

  h1{
    font-size: 3.9em;
    font-weight: 900;
    text-align: center;
    text-transform: capitalize;
    color: var(--white);
    /* margin-bottom: 2em; */
    line-height: 1.0;
  }

  p{
    font-size: 1.1em;
    text-transform: center;
    color: var(--white);
    font-weight: 300;
    margin: 1em auto;
    text-align: center;
    width: 50%;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 10em;
    text-transform: capitalize;
    color: var(--white);
    text-decoration: none;
    border: 0.1em solid var(--white);
    border-radius: 0.625em;
    padding: 0.6em;
    gap: 0.3em;

    span:nth-child(2){
      margin-top: 0.3em;
    }
  }
`;

export const StyledHeroImg = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80vh;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 5em;
    border-top-left-radius: 5em;
  }
`;