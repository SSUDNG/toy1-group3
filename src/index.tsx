import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import app from "./firebase";
import theme from "./defaultTheme";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line prettier/prettier
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
