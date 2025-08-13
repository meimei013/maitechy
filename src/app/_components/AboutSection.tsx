"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Lightbulb as LightbulbIcon,
  Public as PublicIcon,
  AttachMoney as AttachMoneyIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import SwiperCard from "./Swiper";

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: "#9354ff" }} />,
    title: "Engineered with Passion",
    description:
      "We fuse powerful code with beautiful design to build immersive, high-performing websites. Every project is shaped with care, technical mastery, and a user-first mindset. This isn’t just development — it’s craftsmanship with intent.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 50, color: "#9354ff" }} />,
    title: "Innovative at the Core",
    description:
      "We don’t just follow trends — we build what’s next. From interactive interfaces to scalable architectures, we lead with forward-thinking. Our solutions are digital-first, future-ready, and built to adapt.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 50, color: "#9354ff" }} />,
    title: "Empowering All Businesses",
    description:
      "Whether you're a rising startup or an established enterprise, we’ve got your back. We scale our solutions to match your vision, goals, and budget. Your growth is our mission — we help you launch and lead.",
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 50, color: "#9354ff" }} />,
    title: "Affordable & High Quality",
    description:
      "We deliver exceptional quality without inflated costs or compromise. Expect pixel-perfect builds, clean performance, and top-tier support. High-end results, made accessible — that’s our promise.",
  },
];

const AboutSection = React.forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      component="section"
      id="about"
      sx={{
        minHeight: "100vh",
        px: 2,
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        bgcolor: "#000",
        backgroundImage:
          "linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85))",
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
          {/* LEFT: Text & List */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 3, color: "#9354ff" }}
            >
              Who We Are
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, color: "#fff" }}
            >
              We are a tech-powered web development team turning bold ideas into
              digital realities. With passion, precision, and purpose — we
              engineer seamless web experiences that perform. Our focus:
              crafting scalable, smart, and stunning digital solutions built to
              lead.
            </Typography>

            <List disablePadding>
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{ mb: 2, alignItems: "flex-start", px: 0 }}
                >
                  <ListItemIcon sx={{ mt: 0.5, mr: 2 }}>
                    {feature.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ color: "#fff" }}
                      >
                        {feature.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.85, color: "#ccc" }}
                      >
                        {feature.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SwiperCard />
            {/* <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 5,
                width: "100%",
              }}
            >
              <Image
                src="/aboutus.jpg"
                alt="About Us Banner"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box> */}
            {/* <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 3, color: "#9354ff" }}
            >
              Our Team
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, color: "#fff" }}
            >
              We are a tech-powered web development team turning bold ideas into
              digital realities. With passion, precision, and purpose — we
              engineer seamless web experiences that perform. Our focus:
              crafting scalable, smart, and stunning digital solutions built to
              lead.
            </Typography>

            <List disablePadding>
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{ mb: 2, alignItems: "flex-start", px: 0 }}
                >
                  <ListItemIcon sx={{ mt: 0.5, mr: 2 }}>
                    {feature.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ color: "#fff" }}
                      >
                        {feature.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.85, color: "#ccc" }}
                      >
                        {feature.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List> */}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
});

export default AboutSection;
