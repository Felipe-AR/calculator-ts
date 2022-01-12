import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #2E3951;
    --bg-secundary: #212B41;
    --text-primary: #768687;
    --text-secundary: #0DB387;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
  }
  
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #202020;
  }
`;

export default GlobalStyle;
