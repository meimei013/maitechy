"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import "@fontsource/urbanist/latin.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
