import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(128, 0, 128);",
    },
  },
  typography: {
    fontFamily: "DM Sans, Roboto, sans-serif",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HelmetProvider>
    <Suspense>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <RouterProvider router={Router} />
        </React.StrictMode>
      </ThemeProvider>
    </Suspense>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
