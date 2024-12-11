import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
  
    color: white;
    --webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-family: "Roboto", serif;
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    color: #1d1d1d;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
