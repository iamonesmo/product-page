import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, Container, Icon } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

import CustomButton from "./addToCartButton/CustomButton";
import useStyles from "./bodyStyles";

import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";

import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";

const images = [
  {
    thumbnail: thumbnail1,
    image: image1,
  },
  {
    thumbnail: thumbnail2,
    image: image2,
  },
  {
    thumbnail: thumbnail3,
    image: image3,
  },
  {
    thumbnail: thumbnail4,
    image: image4,
  },
];

function CartIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        // fill="#69707D"
        // fillRule="nonzero"
      />
    </SvgIcon>
  );
}

function Body() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2} mt={8} px={8}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              height: "80%",
              width: "80%",
              borderRadius: 5,
            }}
            alt="product image"
            src={image1}
          ></Box>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
              }}
              alt="thumbnail"
              src={thumbnail1}
            />
            <Box
              component="img"
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
              }}
              alt="thumbnail"
              src={thumbnail2}
            />
            <Box
              component="img"
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
              }}
              alt="thumbnail"
              src={thumbnail3}
            />
            <Box
              component="img"
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
              }}
              alt="thumbnail"
              src={thumbnail4}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: "bold",
              letterSpacing: 2,
              color: "#ff7d1a",
            }}
          >
            SNEAKER COMPANY
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Fall Limited Edition Sneakers
          </Typography>
          <Typography sx={{ color: "	#b6bcc8", fontSize: 16 }}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                $125.00
              </Typography>
              <Typography
                sx={{
                  color: "#ff7d1a",
                  fontWeight: "bold",
                  fontSize: 15,
                  backgroundColor: "#ffede0",
                  borderRadius: 1,
                  ml: 2,
                  px: 1,
                }}
              >
                50%
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 12,
                color: "	#b6bcc8",
                textDecoration: "line-through",
              }}
            >
              $250.00
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "row",
            }}
          >
            <CustomButton />
            <Button
              //className={classes.addToCartButton}
              variant="contained"
              disableElevation
              sx={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
                width: "70%",
                borderRadius: 2,
                //backgroundColor: "yellow",

                p: 2,
                ml: 2,
                textTransform: "initial",
                boxShadow: 20,
                "&:hover": { opacity: 0.5, backgroundColor: "#ff7d1a" },
              }}
              startIcon={<CartIcon />}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Body;
