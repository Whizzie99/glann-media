import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
:root{
  --font-stack: 'Hanken Grotesk', sans-serif;
  --white: #fff;
  --black: #000;
  --black-2: #101010;
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
