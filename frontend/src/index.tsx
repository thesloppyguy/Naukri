import { alpha, createTheme, ThemeProvider } from "@mui/material";
import { setContext } from "@apollo/client/link/context";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { getToken } from "./util/auth";
import { AppProvider } from "./states/AppContext";
import React, { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";

const httpLink = createUploadLink({ uri: process.env.REACT_APP_API_URL });
const theme = createTheme({
  palette: {
    primary: {
      main: "#440042",
      light: "#73BAFB",
      dark: "#0C44AE",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#C684FF",
      main: "#8E33FF",
      dark: "#5119B7",
      contrastText: "#FFFFFF",
    },
    info: {
      light: "#61F3F3",
      main: "#00B8D9",
      dark: "#006C9C",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#5BE49B",
      main: "#00A76F",
      dark: "#007867",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFD666",
      main: "#FFAB00",
      dark: "#B76E00",
      contrastText: grey[800],
    },
    error: {
      light: "#FFAC82",
      main: "#FF5630",
      dark: "#B71D18",
      contrastText: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    action: {
      hover: alpha(grey[500], 0.08),
      selected: alpha(grey[500], 0.16),
      disabled: alpha(grey[500], 0.8),
      disabledBackground: alpha(grey[500], 0.24),
      focus: alpha(grey[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
      active: grey[600],
    },
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: "#FFFFFF",
      default: grey[100],
    },
    divider: alpha(grey[500], 0.2),
  },
  typography: {
    fontFamily: "DM Sans, Roboto, sans-serif",
  },
});

const authLink = setContext((_, { headers = {} }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

root.render(
  <HelmetProvider>
    <Suspense>
      <AppProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <React.StrictMode>
              <RouterProvider router={Router} />
            </React.StrictMode>
          </ThemeProvider>
        </ApolloProvider>
      </AppProvider>
    </Suspense>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
