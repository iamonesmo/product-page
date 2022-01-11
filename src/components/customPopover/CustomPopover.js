import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function CustomPopover({ id, openPop, popState, handleClose }) {
  return (
    <div>
      <Popover
        id={id}
        open={openPop}
        onClose={handleClose}
        anchorEl={popState}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography>Content of Popover</Typography>
      </Popover>
    </div>
  );
}

export default CustomPopover;
