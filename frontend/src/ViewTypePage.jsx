import React from "react";
import { Box, Container, Typography, Grid, LinearProgress, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function ViewTypePage() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const data = location.state; 


  // redirect to the homepage if no data is provided
  if (!data) {
    navigate("/");
    return null;
  }

  // calculate the progress value for each trait pair
  //have to claridy this part
  const calculateProgress = (leftValue, rightValue) => {
    return leftValue * 33 === 99 ? 100 :(leftValue * 33)
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 6 }}>
      <Container maxWidth="lg">
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
              {data.title || "Your MBTI Type"}
            </Typography>
            <img
              src={`http://localhost:5001/${data.picture}` || "images/default.png"}
              alt={`${data.type || "Type"} illustration`}
              style={{ maxWidth: "80%", height: "auto", marginBottom: "14px" }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "text.secondary",
                marginBottom: 4,
              }}
            >
              {data.description ||
                "Your MBTI description will provide insights into your traits and decision-making style."}
            </Typography>
          </Grid>

          {/* Right Section: Your Traits */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Your Traits
            </Typography>
            <Divider sx={{ marginBottom: 4 }} />
            {/* Display traits */}
            {[
              { left: "Self-direction", right: "Conformity", leftValue: data.scores.S, rightValue: data.scores.C },
              { left: "Power", right: "Universalism", leftValue: data.scores.P, rightValue: data.scores.U },
              { left: "Achievement", right: "Benevolence", leftValue: data.scores.A, rightValue: data.scores.B },
              { left: "Stimulation", right: "Security", leftValue: data.scores.T, rightValue: data.scores.E },
            ].map(({ left, right, leftValue, rightValue }, index) => (
              <Box key={index} sx={{ marginBottom: 4,  }} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Grid container spacing={2} alignItems="center">
                  {/* Left Trait */}
                  <Grid item xs={4}>
                    <Typography variant="body1">{left}</Typography>
                  </Grid>
                  {/* Progress Bar */}
                  <Grid item xs={4}>
                    <LinearProgress
                      variant="caption"
                      value={calculateProgress(leftValue, rightValue)}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        [`& .MuiLinearProgress-bar`]: {
                          backgroundColor: ["#4F51FD", "#FFC107", "#4CAF50", "#FF5722"][index % 4],
                        },
                      }}
                    />
                  </Grid>
                  {/* Right Trait */}
                  <Grid item xs={4} display={"flex"} justifyContent={"flex-end"}>
                    <Typography variant="body1" sx={{ textAlign: "left-align" }}>
                      {right}
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
