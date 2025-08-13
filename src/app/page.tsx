"use client";
import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import SolutionsSection from "./_components/SolutionsSection";
import Navbar from "./_components/Header/Header";
import ParallaxSection from "./_components/ParallaxSection"; // Add this

export default function Page() {
  const refs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    solutions: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  return (
    <>
      <Navbar sectionRefs={refs} />
      <HeroSection ref={refs.home} />
      <AboutSection ref={refs.about} />
      <SolutionsSection ref={refs.solutions} />
      <ServicesSection ref={refs.services} />

      <Box
        ref={refs.contact}
        component="section"
        sx={{ py: 12, textAlign: "center" }}
      >
        <h2>Contact Us</h2>
      </Box>
    </>
  );
}
