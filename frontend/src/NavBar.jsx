import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        paddingX: 20,
        paddingY: 4,
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

        <Box sx={{ display: "flex", gap: 4 }}>
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
            <Button color="inherit" sx={{ textTransform: "none" }}>
              My page
            </Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
