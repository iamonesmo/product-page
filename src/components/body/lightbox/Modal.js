import { Box } from "@mui/material";
import React, { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";

import useStyles from "./modalStyles";
import Backdrop from "./Backdrop";

function PrevIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M11 1 3 9l8 8"
        stroke="#ff7d1a"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

function NextIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="m2 1 8 8-8 8"
        stroke="#ff7d1a"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}
function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#ff7d1a"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

function Modal({ setShowModal, product, selectedImg }) {
  const classes = useStyles();
  const [modalImg, setModalImg] = useState(selectedImg);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    const totalLength = product.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newImg = product.images[0].image;
      setModalImg(newImg);
      return;
    }
    const newIndex = currentIndex + 1;
    const newImg = product.images.filter((item) => {
      return product.images.indexOf(item) === newIndex;
    });
    const newItem = newImg[0].image;

    setModalImg(newItem);
    setCurrentIndex(newIndex);
  }

  function handlePrev() {
    const totalLength = product.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);

      const newImg = product.images[totalLength - 1].image;
      setModalImg(newImg);
    }

    const newIndex = currentIndex - 1;
    const newImg = product.images.filter((item) => {
      return product.images.indexOf(item) === newIndex;
    });

    const newItem = newImg[0].image;

    setModalImg(newItem);
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          position: "fixed",
          top: "15vh",
          left: "calc(50% - 20rem)",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "38rem",
            display: "flex",
            justifyContent: "flex-end",
            position: "fixed",
            top: "11vh",
          }}
        >
          <IconButton
            onClick={() => {
              setShowModal(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              position: "relative",
              right: "-25px",
              pl: 2,
              pt: 2,
            }}
            onClick={handlePrev}
          >
            <PrevIcon />
          </IconButton>
          <Box
            sx={{ width: "35rem", height: "35rem", borderRadius: 4 }}
            component="img"
            src={modalImg}
          />

          <IconButton
            sx={{
              width: "55px",
              height: "55px",
              backgroundColor: "white",
              position: "relative",
              left: "-25px",
              pl: 3,
              pt: 2,
            }}
            onClick={handleNext}
          >
            <NextIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            zIndex: 10,
            width: "30rem",
            position: "fixed",
            top: "73vh",
            left: "calc(50% - 14rem)",
          }}
        >
          {product.images.map((img, index) => (
            <Box
              key={index}
              component="img"
              onClick={() => setModalImg(img.image)}
              sx={{
                borderRadius: 2,
                border: modalImg === img.image ? "2px solid #ff7d1a" : "",
                opacity: modalImg === img.image ? 0.3 : "",
              }}
              alt="thumbnail"
              src={img.thumbnail}
              className={classes.modalImages}
            />
          ))}
        </Box>
      </Box>

      <Backdrop setShowModal={setShowModal} />
    </>
  );
}

export default Modal;
