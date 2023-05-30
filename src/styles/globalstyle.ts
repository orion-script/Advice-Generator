import {createGlobalStyle} from "styled-components";

import { theme, Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
 * {
  box-sizing: border-box;
 }

  body {
    background-color: ${theme.colors["Dark-Blue"]};
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    text-align: center;
  }

  .attribution {
    font-size: 8px;
    text-align: center;
    color: ${theme.colors["Light-Cyan"]};
  }
  .attribution a {
    color: ${theme.colors["Neon-Green"]};
  }

`;