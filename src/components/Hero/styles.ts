import styled from 'styled-components';

// import sample from '../../assets/images/hero-img.jpeg';

export const StyledHero = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: var(--black-2);
`;

export const StyledHeroLeftContent = styled.div`
  margin-top: 10em;
  margin-left: 3em;

  h1{
    font-size: 3.5em;
    font-weight: 900;
    color: var(--white);
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5em;
    text-transform: capitalize;
    font-size: 1.2em;
    color: var(--white);
    text-decoration: none;
    background: var(--purple);
    padding: 0.6em;
    transition: all .3s ease;
    border: 0.1em solid transparent;
    width: 10em;

    &:hover{
      background: transparent;
      border: 0.1em solid var(--purple);
      color: var(--purple);
    }

    span:last-child{
      margin-top: 0.2em;
      font-size: 1.5em;
    }
  }
`;

export const StyledHeroRight = styled.div`
  width: 50%;
  position: relative;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(189, 121, 217, 0.5);
    z-index: 1;
  }
`;