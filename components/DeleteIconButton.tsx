import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

interface ButtonProps {
  top:number
}
const DeleteIconButton = ({top}:ButtonProps) => {
  return (
    <div>
      <IconButton
        sx={{
          position: "absolute",
          right: 4,
          top: top,
          padding: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          zIndex: 1,
        }}
        size="small"
      >
        <Delete sx={{ fontSize: 16, color: "white" }} />
      </IconButton>
    </div>
  );
};

export default DeleteIconButton;
