import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import NavBar from "./NavBar"; 

function WelcomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar /> 

      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "600", marginBottom: 2 }}>
              Discover your ethical stance
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 6, marginTop: 5 }}>
              Some text goes here
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "281px",
                height: "73px",
                borderRadius: "80px",
                backgroundColor: "#4F51FD",
                color: "#FFF",
                fontWeight: "600",
                textTransform: "none",
                "&:hover": { backgroundColor: "#3C38C8" },
                mt: 4,
              }}
            >
              TAKE A TEST NOW
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end", // Align the image to the right
              alignItems: "flex-start", // Align the top of the image with text
              marginRight: "-90px", // Adjust right margin for balance
            }}
          >
            <img
              src="/illustration.svg"
              alt="Ethics Illustration"
              style={{
                maxWidth: "90%", // Adjust size for better alignment
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WelcomePage;
