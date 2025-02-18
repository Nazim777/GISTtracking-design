import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";



const ImageWrapper = () => {
  return (
    <Box
      sx={{
        height: 250,
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "white",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Close Icon at Top Right */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 40,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        <CloseIcon sx={{ cursor: "pointer" }} />
      </IconButton>

      {/* Timeline Track */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "#e0e0e0",
          zIndex: 1,
        }}
      />

      {/* Timeline Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          height: "100%",
          overflowX: "auto",
          gap: "40px",
          padding: "0 20px",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "100px",
              }}
            >
              {/* Images Stack */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                {[1, 2].map((imageIndex) => (
                  <Box
                    key={imageIndex}
                    sx={{
                      width: 100,
                      height: 80,
                      backgroundColor: "#f5f5f5",
                      borderRadius: "4px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src="/korean.jpg"
                      alt={`Camera ${index + 1} - ${imageIndex}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Timestamp */}
                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "2px 4px",
                        fontSize: "10px",
                      }}
                    >
                      {`${String(index + 1).padStart(2, "0")}m ${String(
                        imageIndex * 17
                      ).padStart(2, "0")}s`}
                    </Typography>
                  </Box>
                ))}
                {/* Camera Label */}
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                  }}
                >
                  Camera {index + 1}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ImageWrapper;
