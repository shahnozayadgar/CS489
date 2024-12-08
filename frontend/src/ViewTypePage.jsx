import React, { useRef } from "react";
import { Box, Container, Typography, Grid, LinearProgress, Divider, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

function ViewTypePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const yourTypeRef = useRef(null); // Reference for the "Your Type" section

  // Redirect to the homepage if no data is provided
  if (!data) {
    navigate("/");
    return null;
  }

  // Calculate the progress percentage for each trait pair
  const calculateProgress = (leftValue, rightValue) => {
    const total = leftValue + rightValue;
    if (total === 0) return 0; // Avoid division by zero
    return Math.round((leftValue / total) * 100);
  };

  // Handle Download Results (Only "Your Type" Section)
  const handleDownload = () => {
    html2canvas(yourTypeRef.current, { 
      useCORS: true,
      scale: window.devicePixelRatio,
     }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "your-type.png";
      link.click();
    });
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 6, marginLeft: 2, marginRight: 2 }}>
      <Container maxWidth="lg" sx={{ px: 2 }}>
        {/* "Your Type" Section */}
        <Box ref={yourTypeRef}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
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
                crossOrigin="anonymous" // Allow cross-origin for html2canvas
                style={{ maxWidth: "50%", height: "auto", marginBottom: "14px" }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  marginBottom: 4,
                  fontSize: {
                    xs: "15px", // Mobile
                    sm: "18px", // Desktop
                  },
                }}
              >
                {data.description ||
                  "Your MBTI description will provide insights into your traits and decision-making style."}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* "Your Traits" Section */}
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "center" }}>
              Your Traits
            </Typography>
            <Divider sx={{ marginBottom: 4 }} />
            <Grid container spacing={2} alignItems="center">
              {[
                { left: "Self-direction", right: "Conformity", leftValue: data.scores.S, rightValue: data.scores.C },
                { left: "Power", right: "Universalism", leftValue: data.scores.P, rightValue: data.scores.U },
                { left: "Achievement", right: "Benevolence", leftValue: data.scores.A, rightValue: data.scores.B },
                { left: "Stimulation", right: "Security", leftValue: data.scores.T, rightValue: data.scores.E },
              ].map(({ left, right, leftValue, rightValue }, index) => {
                const percentage = calculateProgress(leftValue, rightValue);
                const dominantTrait = percentage >= 50 ? left : right;

                return (
                  <Grid key={index} container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
                    {/* Trait Label */}
                    <Grid item xs={12} sx={{ textAlign: "center", marginBottom: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color: ["#4F51FD", "#FFC107", "#4CAF50", "#FF5722"][index % 4],
                        }}
                      >
                        {percentage}% {dominantTrait}
                      </Typography>
                    </Grid>
                    {/* Left Trait */}
                    <Grid item xs={4}>
                      <Typography variant="body1" 
                      sx={{
                        color: "black", 
                        paddingLeft: {
                          xs: 1, // Padding for mobile
                          sm: 7, // Padding for laptops and larger screens
                        },
                        fontSize: {
                        xs: "14px", // Smaller font on mobile
                        sm: "19px", // Larger font on desktop
                      }, }}>
                        {left}
                      </Typography>
                    </Grid>
                    {/* Progress Bar */}
                    <Grid item xs={4}>
                      <LinearProgress
                        value={percentage}
                        variant="determinate"
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
                    <Grid item xs={4} sx={{ textAlign: "left"}}>
                      <Typography variant="body1" sx={{ color: "black", 
                      marginLeft: {
                        xs: 2, // No margin on small screens (mobile)
                        sm: 12, // Add margin on larger screens
                      },
                      fontSize: {
                        xs: "14px", // Smaller font on mobile
                        sm: "19px", // Larger font on desktop
                      },
                      }}>
                        {right}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* Download Results Button */}
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            onClick={handleDownload}
            sx={{
              backgroundColor: "#4F51FD",
              color: "white",
              textTransform: "none",
              fontWeight: "500",
              fontSize: "18px",
              "&:hover": { backgroundColor: "#3F41E0" },
            }}
          >
            Download result
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}

export default ViewTypePage;
