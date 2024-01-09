import { useState } from "react";
import Router from "./routes";
import createTheme from "../src/theme";
import { useScrollToTop } from "../src/hooks";
import { ThemeProvider } from "@mui/material";

function App() {
  useScrollToTop();
  return (
    <ThemeProvider theme={createTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
