import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Urbanist', sans-serif",
  },
});

export default theme;
