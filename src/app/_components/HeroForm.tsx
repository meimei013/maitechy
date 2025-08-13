"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const MotionPaper = motion(Paper);

export default function HeroForm() {
  return (
    <MotionPaper
      elevation={1}
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        p: 4,
        backgroundColor: "#fff",
        borderRadius: 2,
        color: "#000",
        minHeight: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Share Your Requirements
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        We're eager to work with you. Please share your project goals and
        contact information.
      </Typography>

      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <TextField fullWidth label="Name*" variant="outlined" size="small" />
        <TextField fullWidth label="Email*" variant="outlined" size="small" />
        <TextField fullWidth label="Phone*" variant="outlined" size="small" />

        <FormControl fullWidth size="small">
          <InputLabel>Interested In*</InputLabel>
          <Select
            label="Interested In*"
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
              PaperProps: {
                sx: { maxHeight: 250, overflowY: "auto" },
              },
            }}
          >
            <MenuItem value="web">Web Development</MenuItem>
            <MenuItem value="app">Mobile App</MenuItem>
            <MenuItem value="ai">AI Solutions</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small">
          <InputLabel>Budget*</InputLabel>
          <Select
            label="Budget*"
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
              PaperProps: {
                sx: { maxHeight: 250, overflowY: "auto" },
              },
            }}
          >
            <MenuItem value="<5k">Below $5K</MenuItem>
            <MenuItem value="5k-20k">$5K - $20K</MenuItem>
            <MenuItem value=">20k">Above $20K</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="WhatsApp No"
          variant="outlined"
          size="small"
        />

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Message*"
          variant="outlined"
          size="small"
          sx={{ gridColumn: "1 / -1" }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            gridColumn: "1 / -1",
            mt: 2,
            background: "rgba(147, 84, 255, 1.0)",
            color: "#fff",
            borderRadius: "4px",
            boxShadow: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundImage:
                "linear-gradient(0deg, #9353ff 0%, #3d296b 100%)",
            },
          }}
        >
          SEND YOUR INQUIRY
        </Button>
      </Box>
    </MotionPaper>
  );
}
