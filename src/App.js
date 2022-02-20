import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";
import images from "./components/body/images";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const product1 = {
  name: "Fall Limited Edition Sneakers",
  discription:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
  images: images,
};

function App() {
  const [itemsCount, setItemsCount] = useState(0);

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
        <NavBar
          itemsCount={itemsCount}
          setItemsCount={setItemsCount}
          product={product1}
        />
        <Body
          itemsCount={itemsCount}
          setItemsCount={setItemsCount}
          product={product1}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
