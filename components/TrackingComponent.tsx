import { Box } from "@mui/material";
import React from "react";
import DatePicker from "./DatePicker";
import FilterOptions from "./FilterOption";
import ButtonGroup from "./ButtonGroup";

const TrackingComponent = () => {
  return (
    <Box>
      {/* Date Range Inputs */}
      <Box sx={{ mb: 1 }}>
        <DatePicker label="Start" date="01-14-2025" />
        <DatePicker label="End" date="01-20-2025" />
      </Box>

      {/* Similarity Scale */}
      <Box sx={{ mb: 1 }}>
        <FilterOptions />
      </Box>

      {/* search button */}
      <Box>
        <ButtonGroup bg="#4F8FEA" text="Search" />
      </Box>

      {/* reset button */}
      <Box sx={{ marginTop: "10px" }}>
        <ButtonGroup
          bg="#FCEDD5"
          color="gray"
          text="Reset Filter"
          fontWeight="bold"
        />
      </Box>
    </Box>
  );
};

export default TrackingComponent;
