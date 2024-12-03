import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          paddingX: { xs: 2, md: 20 }, // Smaller padding for phones
          paddingY: { xs: 2, md: 4 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ETHICSQUEST
            </Typography>
          </NavLink>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hidden on small screens
              gap: 4,
            }}
          >
            <NavLink
              to="/registration"
              style={({ isActive }) => ({
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#1976d2" : "inherit",
                borderBottom: isActive ? "2px solid #1976d2" : "none",
              })}
            >
              <Button color="inherit" sx={{ textTransform: "none" }}>
                Take a test
              </Button>
            </NavLink>
            <NavLink
              to="/your-type"
              style={({ isActive }) => ({
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#1976d2" : "inherit",
                borderBottom: isActive ? "2px solid #1976d2" : "none",
              })}
            >
            </NavLink>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }} // Visible on small screens
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={NavLink} to="/registration">
              <ListItemText primary="Take a test" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
