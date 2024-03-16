/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { customShadows } from "./custom-shadow";
import { GlobalStyles } from "./global-styles";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: palette("light"),
      typography,
      shape: { borderRadius: 8 },
      direction: "ltr",
      shadows: shadows("light"),
      customShadows: customShadows("light"),
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
