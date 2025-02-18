import { Box } from "@mui/material";
import React from "react";

// displaying image in grid layout
const ImageGrid = () => {
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        p: 2,
        pt: 0,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        }}
      >
        {Array(15)
          .fill(null)
          .map((_, index) => (
            <Box
              key={index}
              sx={{
                paddingTop: "100%",
                position: "relative",
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <img
                src="/korean.jpg"
                alt={`Track ${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ImageGrid;
