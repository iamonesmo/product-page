import React from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff7d1a",
        light: "#ffede0",
      },
    },
    typography: {
      fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
      fontWeightBold: 700,
    },
    components: {
      MuiBadge: {
        styleOverrides: {
          badge: {
            right: 2,
            minWidth: 20,
            height: 15,
            color: "white",
          },
        },
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
