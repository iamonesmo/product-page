import React from "react";
import useStyles from "./modalStyles";

function Backdrop({ setShowModal }) {
  const classes = useStyles();
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        setShowModal(false);
      }}
    />
  );
}

export default Backdrop;
