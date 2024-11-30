import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  LinearProgress,
  Divider,
} from "@mui/material";

function ViewTypePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ marginTop: 6 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section: Your Type */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Your Type
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "#4F51FD",
              }}
            >
              SOMETHING
            </Typography>
            <img
              src="/mainPage.svg"
              alt="Type Illustration"
              style={{ maxWidth: "80%", height: "auto", marginBottom: "14px" }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "text.secondary",
                mb: 2
              }}
            >
              Some text describing this type
            </Typography>
          </Grid>

          {/* Right Section: Your Traits */}
          <Grid item xs={12} md={6} sx={{}}> {/* Added marginTop */}
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Your Traits
            </Typography>
            <Divider sx={{ marginBottom: 17 }} />
            {/* Traits List */}
            {["something", "something", "something", "something"].map((trait, index) => (
              <Box key={index} sx={{ marginBottom: 4 }}> {/* Increased marginBottom */}
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4} >
                    <Typography variant="body1">{trait}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      variant="determinate"
                      value={(index + 1) * 20} // Replace with dynamic values
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        [`& .MuiLinearProgress-bar`]: {
                          backgroundColor: ["#4F51FD", "#FFC107", "#4CAF50", "#9C27B0"][index],
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" sx={{ textAlign: "right" }}>
                      {trait}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ViewTypePage;
