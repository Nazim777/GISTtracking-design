import React from "react";
import { Box, Button } from "@mui/material";
interface buttonPrps {
  bg: string;
  color?: string;
  fontWeight?: string;
  text: string;
}


// reuseable button component
const ButtonGroup = ({ bg, color, fontWeight, text }: buttonPrps) => {
  return (
    <Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: bg,
          color: color,
          fontWeight: fontWeight,
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonGroup;
