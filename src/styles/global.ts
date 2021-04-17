import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *, html {
    box-sizing: border-box;
    font-size: 16px;
  }

  html {
    @media (min-width: 1530px) {
      font-size: 75%;
    }

    @media (min-width: 1371px) {
      font-size: 68%;
    }

    @media (max-width: 1370px) {
      font-size: 62.5%;
    }

    @media (max-width: 935px) {
      font-size: 55.5%;
    }

    @media (max-width: 800px) {
      font-size: 50.5%;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, input, button {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    color: #fff;
    background-color: #ebf2f5;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;