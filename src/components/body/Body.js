import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import CustomButton from "./addToCartButton/CustomButton";
import Modal from "./lightbox/Modal";
import { ThemeContext } from "@emotion/react";

function CartIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
    </SvgIcon>
  );
}

function Body({ itemsCount, setItemsCount, product }) {
  const [selectedImg, setSelectedImg] = useState(product.images[0].image);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Grid container spacing={10} sx={{ mt: { xs: "none", sm: 0 } }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={
              {
                // xs: {
                //   display: "block",
                //   flexDirection: "row",
                //   position: "relative",
                // },
                // md: {
                //   display: "flex",
                //   flexDirection: "row",
                //   position: "relative",
                // },
              }
            }
          >
            <Button
              sx={{
                display: { xs: "flex", sm: "none" },
                postion: "relative",
                left: "70px",
                color: "white",
              }}
            >
              prev
            </Button>

            <Box
              component="img"
              sx={{
                // display: { xs: "none", md: "flex" },
                // height: "80%",
                // width: "90%",
                minWidth: "300px",
                width: { xs: "100%", sm: "90%" },
                height: "80%",
                borderRadius: { xs: 0, sm: 5 },
                cursor: "pointer",
              }}
              alt="product image"
              src={selectedImg}
              onClick={() => handleShowModal()}
            />
            <Button
              sx={{
                display: { xs: "flex", sm: "none" },
                postion: "relative",
                right: "70px",
                color: "white",
              }}
            >
              next
            </Button>
          </Box>

          <Box
            sx={{
              mt: 3,
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              width: "90%",
              minWidth: "300px",
            }}
          >
            {product.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                onClick={() => setSelectedImg(img.image)}
                style={{
                  border: selectedImg === img.image ? "2px solid #ff7d1a" : "",
                  opacity: selectedImg === img.image ? 0.3 : "",
                }}
                sx={{
                  width: "20%",
                  height: "20%",
                  maxWidth: 90,
                  maxHeight: 90,
                  borderRadius: 2,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.5,
                  },
                }}
                alt="thumbnail"
                src={img.thumbnail}
              />
            ))}
          </Box>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              product={product}
              setSelectedImg={setSelectedImg}
              selectedImg={selectedImg}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: "bold",
                letterSpacing: 2,
                color: "#ff7d1a",
                mb: 2,
              }}
            >
              SNEAKER COMPANY
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {product.name}
            </Typography>
          </Box>

          <Typography sx={{ color: "#68707d", fontSize: 16 }}>
            {product.discription}
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                ${product.price}
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
            <CustomButton
              itemsCount={itemsCount}
              setItemsCount={setItemsCount}
            />
            {!itemsCount ? (
              <Button
                variant="contained"
                disableElevation
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                  width: "70%",
                  borderRadius: 2,
                  p: 2,
                  ml: 2,
                  textTransform: "initial",
                  boxShadow: 20,
                  "&:hover": { opacity: 0.5, backgroundColor: "#ff7d1a" },
                }}
                startIcon={<CartIcon />}
                onClick={() => {
                  if (!itemsCount) {
                    setItemsCount(itemsCount + 1);
                  }
                }}
              >
                Add to cart
              </Button>
            ) : (
              <Button
                variant="contained"
                disableElevation
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                  width: "70%",
                  borderRadius: 2,
                  p: 2,
                  ml: 2,
                  textTransform: "initial",
                  boxShadow: 20,
                  "&:hover": { opacity: 0.5, backgroundColor: "#ff7d1a" },
                }}
                startIcon={<ShoppingCartCheckoutIcon />}
              >
                Go to cart
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Body;
