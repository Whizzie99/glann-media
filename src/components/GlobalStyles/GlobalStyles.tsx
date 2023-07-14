import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
:root{
  --font-stack: 'Hanken Grotesk', sans-serif;
  --white: #fff;
  --black: #000;
  --black-2: #101010;
  --black-3: #171717;
  --black-4: #292929;
  --gray-1: #C4C4C4;

  --primary-gradient: linear-gradient(48deg, #BF00FF 0%, #750CE8 100%);
}


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-stack);
  }
`;
