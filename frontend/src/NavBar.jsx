import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

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
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ETHICSQUEST
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Take a test
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            My page
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;