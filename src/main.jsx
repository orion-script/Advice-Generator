import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalStyle } from "./styles/globalstyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
