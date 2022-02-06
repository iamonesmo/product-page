import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import productThumb from "../../../images/image-product-1-thumbnail.jpg";
import trashIcon from "../../../images/icon-delete.svg";

function PopoverCard() {
  return (
    <Card>
      <Box sx={{ p: 3, borderBottom: "solid #eeeeee 1px" }}>
        <Typography sx={{ fontWeight: "bold" }}>Cart</Typography>
      </Box>
      <Box sx={{ display: "flex", px: 3, alignItems: "center" }}>
        <CardMedia
          component="img"
          image={productThumb}
          alt="thumbnail"
          sx={{ width: 50, height: 50, borderRadius: 1 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography>Product description</Typography>
            <Typography>Price x Quantity Total</Typography>
          </CardContent>
        </Box>
        <IconButton>
          <Box component="img" src={trashIcon} alt="delete-icon" />
        </IconButton>
      </Box>
      <Box sx={{ p: 3 }}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            textTransform: "capitalize",
            color: "white",
            p: 2,
            boxShadow: "none",
            "&:hover": { opacity: 0.5, backgroundColor: "#ff7d1a" },
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Checkout</Typography>
        </Button>
      </Box>
    </Card>
  );
}

export default PopoverCard;
