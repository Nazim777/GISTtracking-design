"use client";
import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Box } from "@mui/material";

// map component
const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: [],
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-0.1276, 51.5072]),
        zoom: 13,
      }),
    });

    return () => {
      initialMap.setTarget(undefined);
    };
  }, []);
  return (
    <Box sx={{ flex: 1, position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default MapComponent;
