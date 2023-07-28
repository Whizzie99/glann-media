import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CUSTOM FONTS */
  @font-face {
    font-family: 'Voga Regular';
    font-style: normal;
    /* font-weight: normal; */
    src: local('Voga Regular'), url('../../assets/fonts/Voga-Font/Voga-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Voga Medium';
    font-style: normal;
    /* font-weight: normal; */
    src: local('Voga Meduim'), url('../../assets/fonts/Voga-Font/Voga-Meduim.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Voga Bold';
    font-style: normal;
    /* font-weight: normal; */
    src: local('Voga Bold'), url('../../assets/fonts/Voga-Font/Voga-Bold.ttf') format('ttf');
  }


  /* VARS */
:root{
  /* --font-stack: 'Hanken Grotesk', sans-serif; */
  --font-stack-regular: 'Voga Regular';
  --font-stack-medium: 'Voga Medium';
  --font-stack-bold: 'Voga Bold';
  --font-stack-2: 'Lato', sans-serif;
  --white: #fff;
  --black: #000;
  --black-2: #101010;
  --black-3: #171717;
  --black-4: #292929;
  --gray-1: #C4C4C4;
  --gray-2: #5F5F5F;

  --primary-gradient: linear-gradient(48deg, #BF00FF 0%, #750CE8 100%);
}


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* font-family: var(--font-stack-regular); */
  }

  h1,h2,h3,h4,h5,h6{
    font-family: var(--font-stack-bold);
  }

  p, li, a, button, input, input::placeholder{
    font-family: var(--font-stack-2);
  }
`;
