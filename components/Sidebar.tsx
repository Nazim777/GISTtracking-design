"use client";
import React from "react";
import MapIcon from "@mui/icons-material/Map";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import "ol/ol.css";
import { Build } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";

const Sidebar = () => {
  const sidebarItems = [
    { icon: <MapIcon />, label: "Map" },
    { icon: <AccountBoxIcon />, label: "Face" },
    { icon: <AppsIcon />, label: "Components" },
    { icon: <SettingsOverscanIcon />, label: "Scan" },
    { icon: <FileCopyIcon />, label: "File Shield" },
    { icon: <Build />, label: "Tools" },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 60,
        "& .MuiDrawer-paper": {
          width: 60,
          backgroundColor: "#17345F",

          color: "white",
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 2,
        }}
      >
        {sidebarItems.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              color: `${index === 0 ? "white" : "gray"}`,
              my: 1,
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
