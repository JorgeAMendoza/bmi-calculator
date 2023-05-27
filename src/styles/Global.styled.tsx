import { createGlobalStyle } from 'styled-components';
import InterFont from '../assets/fonts/Inter-VariableFont_slnt,wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
  }

  :root {
    --blue: #345FF6;
    --gun-metal: #253347;
    --white: #FFFFFF;
    --dark-electric-blue: #5E6E85;
    --borders: #D8E2E7;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }

  body{
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background-color: var(--white);
    color: var(--gun-metal);
  }
  
  img, svg, picture, video {
    max-width: 100%;
    display:block;
  }

  input{
    font-family: inherit;
    border:none;
  }

  ul,ol{
    list-style: none;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border:none;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  #root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
