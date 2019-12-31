import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
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
