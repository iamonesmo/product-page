import React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";

import minusIcon from "../../../images/icon-minus.svg";
import plusIcon from "../../../images/icon-plus.svg";
import useStyles from "./styles";

function CustomButton() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        p: 2,
        borderRadius: 2,
        backgroundColor: "	#f7f8fd",
      }}
    >
      <IconButton sx={{ p: 0, "&:hover": { opacity: 0.5 } }}>
        <Box component="img" alt="remove" src={minusIcon} />
      </IconButton>
      <Typography fontWeight="bold">1</Typography>
      <IconButton sx={{ p: 0, "&:hover": { opacity: 0.5 } }}>
        <Box component="img" alt="add" src={plusIcon} />
      </IconButton>
    </Box>
  );
}

export default CustomButton;
