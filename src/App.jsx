import React, { useEffect, useState } from "react";
import HeaderPage from "./components/HeaderPage";
import { CssBaseline, useMediaQuery } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const colorMode = React.useContext(ColorModeContext);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderPage toggle={toggleColorMode} theme={theme} />
        <Layout></Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
