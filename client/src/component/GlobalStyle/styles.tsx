import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100%;
    font-size: 10px;
    background-color: white;
    margin : 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
