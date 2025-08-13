"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HeroForm from "./HeroForm";

const HeroSection = React.forwardRef<HTMLElement>((_, ref) => (
  <Box
    ref={ref}
    component="section"
    id="home"
    sx={{
      minHeight: "100vh",
      px: 2,
      py: { xs: 8, md: 12 },
      display: "flex",
      alignItems: "center",
      // bgcolor: "#fff",
      backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url("/bg-white.jpg")',

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {/* Text Content */}
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#000", mb: 2, lineHeight: "60px" }}
          >
            Strategic Web Solutions
            <br />
            <Box component="span" sx={{ color: "#9354ff" }}>
              Fueled by Innovation
            </Box>
            <br />
            <Box component="span" sx={{ color: "#000" }}>
              Engineered for Maximum Impact
            </Box>
            <br />
            <Box component="span" sx={{ color: "#9354ff" }}>
              Designed to Deliver Real Results
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, color: "#000" }}>
            Where Vision Turns into Digital Reality
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, color: "#000" }}>
            Join Maitechy to transform your online presence with modern,
            responsive, and scalable web solutions.
          </Typography>
        </motion.div>

        {/* Form */}
        <motion.div
          style={{ flex: 1, width: "100%" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroForm />
        </motion.div>
      </Box>
    </Container>
  </Box>
));

export default HeroSection;
