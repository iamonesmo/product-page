import React from "react";
import NavBar from "./components/navbar/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
      fontWeightBold: 700,
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
