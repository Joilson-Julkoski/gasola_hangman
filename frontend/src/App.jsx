import React from "react";
import Home from "./pages/home";
import { GameControlProvider } from "./providers/gameControl";
import theme from "./muiTheme";
import { ThemeProvider } from "@mui/material";
import { DeviceProvider } from "./providers/isMobile";

function App() {
  return (
    <DeviceProvider>
      <ThemeProvider theme={theme}>
        <GameControlProvider>
          <Home />
        </GameControlProvider>
      </ThemeProvider>
    </DeviceProvider>

  );
}

export default App;
