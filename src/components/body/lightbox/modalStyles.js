import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    //display: "flex",
    borderRadius: "20px",
    backgroundColor: "white",
    width: "35rem",
    height: "35rem",
    zIndex: 10,
    position: "fixed",
    top: "15vh",
    left: "calc(50% - 17.5rem)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImages: {
    width: "20%",
    height: "20%",
    maxWidth: 90,
    maxHeight: 90,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.5,
    },
  },

  controlButtons: {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    // display: "flex",
    // position: "fixed",
    // zIndex: 11,
    // top: "-15vh",
    // left: "200px",
  },

  backdrop: {
    [theme.breakpoints.up("sm")]: {
      position: "fixed",
      zIndex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      width: "100%",
      height: "100vh",
      top: 0,
      left: 0,
    },
  },
}));

export default useStyles;
