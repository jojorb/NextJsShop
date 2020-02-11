import { createGlobalStyle } from 'styled-components';
import { ThemeClear } from '../layouts/theme_clear';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Century-Gothic";
    font-stretch: normal;
    font-style: normal;
    src: url(".././static/font/CenturyGothic_gdi.woff") format("woff");
    unicode-range: U+0020-F002;
  }
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica   Neue";
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  *:focus,
  *:hover,
  *:active {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
  }

  html,
  body {
    background: ${ThemeClear.white};
    color: ${ThemeClear.black};
    padding: 0;
    margin: 0;
    height: 100% !important;
    font-family: "Century-Gothic", Arial, sans-serif;
  }
  ::selection{
    background-color: ${ThemeClear.black};
    color: ${ThemeClear.white};
  }
  a {
    color: ${ThemeClear.black};
  }
  a:hover {
    color: ${ThemeClear.darkgrey};
  }
`;
