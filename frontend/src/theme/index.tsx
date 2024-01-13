import { useMemo } from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { palette } from "./Palette";
import { shadows } from "./Shadows";
import { overrides } from "./Overrides";
import { typography } from "./Typography";
import { customShadows } from "./CustomShadows";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: any) {
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
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
