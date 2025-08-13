import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

export default function Navbar({ sectionRefs }: NavbarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const menuItems = ["home", "about", "solutions", "services", "contact"];

  const scrollTo = (key: string) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "3px solid #9354ff",
        // borderImage: "linear-gradient(to right, #f90, #9354ff) 1",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            onClick={() => scrollTo("home")}
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src="/logo.png" // Ensure this file is in /public
              alt="Maitechy Logo"
              sx={{ height: 40, width: "auto" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit" onClick={() => scrollTo(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={() => setAnchorEl(null)}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={() => scrollTo(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
