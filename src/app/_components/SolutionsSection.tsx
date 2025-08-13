import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Chat as ChatIcon,
  Forum as ForumIcon,
  CalendarToday as CalendarIcon,
  RocketLaunch as RocketIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <ChatIcon />,
    title: "Consultation & Planning",
    description:
      "We start by understanding your goals, audience, and requirements. Then, we create a strategic plan to guide the development process.",
  },
  {
    icon: <ForumIcon />,
    title: "Design (UI/UX)",
    description:
      "Our team designs a user-friendly interface that reflects your brand and ensures a seamless experience across all devices.",
  },
  {
    icon: <CalendarIcon />,
    title: "Development",
    description:
      "We build your web application using modern technologies—covering both frontend and backend development for functionality and performance.",
  },
  {
    icon: <RocketIcon />,
    title: "Content & Integration",
    description:
      "We integrate your content—text, images, products, or videos—optimized for clarity, speed, and SEO.",
  },
  {
    icon: <RocketIcon />,
    title: "Testing & Launch",
    description:
      "Before going live, we rigorously test your site for bugs, responsiveness, and security. Once approved, we launch it on your chosen domain.",
  },
  {
    icon: <RocketIcon />,
    title: " Support & Optimization",
    description:
      "After launch, we provide ongoing maintenance, updates, and performance tuning, ensuring your site stays fast, secure, and up-to-date.",
  },
];

const SolutionsSection = React.forwardRef<HTMLElement>((_, ref) => (
  <Box
    ref={ref}
    component="section"
    id="workflow"
    sx={{
      minHeight: "100vh",
      px: 2,
      py: { xs: 8, md: 12 },
      display: "flex",
      alignItems: "center",
      backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url("/bg-white2.jpg")',

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container maxWidth="xl">
      <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
        Workflow Structure
      </Typography>

      <Grid container spacing={8} alignItems="center">
        {/* Left Image */}
        <Grid size={{ xs: 12, md: 6, xl: 6 }}>
          <Box
            component="img"
            src="/bg-flow.svg"
            alt="Workflow"
            sx={{
              width: "700px",
              height: "700px",
              borderRadius: 0,
              boxShadow: 0,
            }}
          />
        </Grid>

        {/* Right Steps */}
        <Grid size={{ xs: 12, md: 6, xl: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              pl: { md: 4 },
              position: "relative",
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
              >
                {/* Icon */}
                <Avatar
                  sx={{
                    bgcolor: "#9354ff ",
                    width: 48,
                    height: 48,
                    mt: "4px",
                  }}
                >
                  {step.icon}
                </Avatar>

                {/* Text */}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Step {index + 1}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}

            {/* CTA Button */}
            <Box mt={4}>
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
                Book Free Consultation
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
));

export default SolutionsSection;
