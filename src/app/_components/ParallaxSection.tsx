"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

type ParallaxSectionProps = {
  image: string;
  children?: React.ReactNode;
  height?: string | number;
};

const ParallaxSection = React.forwardRef<HTMLElement, ParallaxSectionProps>(
  ({ image, children, height = "100vh" }, ref) => (
    <Box
      ref={ref}
      component="section"
      sx={{
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 Key for parallax
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    >
      <Box sx={{ zIndex: 2 }}>{children}</Box>
    </Box>
  )
);

ParallaxSection.displayName = "ParallaxSection";

export default ParallaxSection;
