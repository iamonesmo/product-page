import React from "react";
import Popover from "@mui/material/Popover";
import PopoverCard from "./popoverCard/PopoverCard";

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
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PopoverCard />
      </Popover>
    </div>
  );
}

export default CustomPopover;
