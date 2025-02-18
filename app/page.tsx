"use client";
import { Box, Typography, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ButtonGroup from "@/components/ButtonGroup";
import "ol/ol.css";
import MapComponent from "@/components/MapComponent";
import Sidebar from "@/components/Sidebar";
import TrackingComponents from "@/components/TrackingComponent";
import ImageGrid from "@/components/ImageGrid";
import { Delete } from "@mui/icons-material";
import ImageWrapper from "@/components/ImageWrapper";
import Image from "next/image";

const TrackingInterface: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* displying the sidebar with navigation menu */}
      <Sidebar />
      {/* main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          height: "100vh",
        }}
      >
        {/* left side content area */}
        <Box
          sx={{
            width: 400,
            borderRight: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 2, flexShrink: 0 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              <WestIcon sx={{ fontWeight: "bold", marginBottom: "8px" }} />{" "}
              TRACKING
            </Typography>

            <Box sx={{ display: "flex" }}>
              {/*left side image container with delete icons */}
              <Box
                sx={{
                  marginRight: "20px",
                  position: "relative",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 4,
                    top: 4,
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
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <img
                    src="/korean.jpg"
                    alt={`Track`}
                    style={{
                      objectFit: "cover",
                      height: "150px",
                      width: "100px",
                    }}
                  />
                  <img
                    src="/korean.jpg"
                    alt={`Track`}
                    style={{
                      objectFit: "cover",
                      height: "150px",
                      width: "100px",
                    }}
                  />
                </Box>
              </Box>

              {/* whole tracking component with filtering */}

              <TrackingComponents />
            </Box>
          </Box>

          <ImageGrid />

          <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <ButtonGroup bg="#17345F" text="Tracking" fontWeight="bold" />
          </Box>
        </Box>

        {/* right side content area */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* displaying the map */}
          <MapComponent />
          {/* displaying bottom image timeline */}
          <ImageWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingInterface;
