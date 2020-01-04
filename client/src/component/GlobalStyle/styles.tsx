import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'animate.css/animate.min.css';

const GlobalStyles = createGlobalStyle`
  ${reset};
  /* Font weight Regular(400), Bold(700), Extra Bold(800), Light(300) 지원 */
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 10px
  }
  body {
    font-family: 'NanumSquare', sans-serif;
    height: 100%;
    background-color: white;
    margin : 0;
  }::-webkit-scrollbar { 
    display: none; 
  }
  a{
    text-decoration:none;
    color:inherit;
    }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
