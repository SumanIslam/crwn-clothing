import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0.5rem 3rem;

    @media screen and (max-width: 800px) {
      padding: 0.6rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
