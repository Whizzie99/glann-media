import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
:root{
  --font-stack: 'Hanken Grotesk', sans-serif;
  --white: #fff;
  --black: #000;
  --black-2: #130F0F;
  --purple: #BD79D9;
}


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-stack);
  }
`;