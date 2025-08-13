"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Memory as AiIcon,
  Devices as WebIcon,
  DesignServices as UiUxIcon,
  Build as DevOpsIcon,
  Verified as QaIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "Custom Software Development",
    description:
      "We build customized software solutions that address your business' unique challenges, driving efficiency and growth with user-centric designs.",
  },
  {
    icon: <AiIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "AI / ML / Generative AI",
    description:
      "We build smart systems that learn from data, enabling businesses to automate tasks, predict trends, and generate innovative solutions.",
  },
  {
    icon: <WebIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "Web / Mobile App Development",
    description:
      "We deliver end-to-end, high-performance web and mobile apps tailored to your business needs, with seamless user experiences across platforms.",
  },
  {
    icon: <UiUxIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "UI / UX Design",
    description:
      "We create engaging UI/UX designs that put users first, making your digital products both beautiful and functional, while ensuring seamless UX.",
  },
  {
    icon: <DevOpsIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "DevOps",
    description:
      "We streamline development and operations, ensuring faster, more reliable software delivery with smooth collaboration and improvement.",
  },
  {
    icon: <QaIcon sx={{ fontSize: 40, color: "#9354ff " }} />,
    title: "Quality Assurance and Testing",
    description:
      "We guarantee flawless software with thorough testing by identifying bugs, ensuring reliable performance, and the best user experience.",
  },
];

const ServicesSection = React.forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      ref={ref}
      component="section"
      id="services"
      sx={{
        minHeight: "100vh",
        px: 2,
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        bgcolor: "#000",
        color: "#fff",
        backgroundImage:
          "linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85))",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 8 }}>
          Unleash the Power of Innovation with Engineering Excellence
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 16px)",
                  md: "1 1 calc(33.333% - 24px)",
                },
                maxWidth: { md: "500px" },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: 250,
                    backgroundColor: "#1a1a1a",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ mb: 3 }}>{service.icon}</Box>
                  <Typography
                    variant="subtitle1"
                    color="#fff"
                    fontWeight={700}
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="gray" sx={{ flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>

        <Box textAlign="center" mt={6}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              gridColumn: "1 / -1",
              mt: 2,
              background: "rgba(147, 84, 255, 1.0)",
              color: "#fff    ",
              boxShadow: "none",
              borderRadius: "4px",
              fontWeight: 600,
              "&:hover": {
                backgroundImage:
                  "linear-gradient(0deg, #9353ff 0%, #3d296b 100%)",
              },
            }}
          >
            Discover Our Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
});

export default ServicesSection;
