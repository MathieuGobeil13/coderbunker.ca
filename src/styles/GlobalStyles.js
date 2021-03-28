import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #ff0000;
    --lightred: #FFE0E1;
    --black: #2E2E2E;
    --white: #fff;
    --darkgrey: #747474;
    --lightgrey: #dcdcdc;
    --peach: #FCF5E8;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .highlight-red {
    display: inline-block;
    background: var(--lightred);
    color: var(--red);
    padding: 4px 16px;
    transform: skew(-16deg) rotate(-2deg);
    width: min-content;
  }
`;

export default GlobalStyles;
