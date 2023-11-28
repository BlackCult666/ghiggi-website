import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Manrope', sans-serif;
    margin: auto;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #0d0d0d;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: #161616;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1e1e1e;
    border-radius: 30px;
    border: 2px solid #161616;
    background-clip: content-box;
  }

  ::-moz-selection {
    color: #0d0d0d;
    background-color: #dbdbdb;
    caret-color: #dbdbdb;
  }

  ::selection {
    color: #0d0d0d;
    background-color: #dbdbdb;
    caret-color: #dbdbdb;
  }

  h1, h2, h3, h4, p {
    color: #dbdbdb;
  }

  h1, h2, h3, h4 {
    letter-spacing: 1px;
  }

  p, a {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 1.5;
  }

  a {
    font-weight: 500;
    color: #dbdbdb;
  }

  h1 {
    font-weight: 300;
    font-size: 40px;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
  }

  h3 {
    font-weight: 400;
    font-size: 18px;
  }

  span {
    font-size: 14px;
    color: #6A6A6A;
  }

  ion-icon {
    color: #6A6A6A;
    font-size: 24px;
  }

  hr {
    height: 1px;
    border-color: #dbdbdb1f;
  }
  
  br {
    -webkit-user-select: none;
  }
`

export default GlobalStyle;