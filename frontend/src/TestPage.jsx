import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

function TestPage() {
  const [value, setValue] = useState(""); // Selected option
  const [question, setQuestion] = useState(null); // Fetched question
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch question data from the API
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("http://localhost:5000/questions/id"); 
        if (!response.ok) {
          throw new Error("Failed to fetch question.");
        }
        const data = await response.json();
        setQuestion(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Main Content Section */}
      <Container maxWidth="md">
        {/* Illustration Section */}
        <Box textAlign="center">
          <img
            src="/illustration.svg"
            alt="Scenario Illustration"
            style={{ maxWidth: "50%", height: "auto", marginBottom: "16px" }}
          />
          <Typography variant="body1" sx={{ fontSize: "16px", color: "text.secondary" }}>
            {question?.illustration || "Scenario illustration description."}
          </Typography>
        </Box>

        {/* Scenario Box */}
        <Paper
          elevation={6}
          sx={{
            backgroundColor: "#EEF4FF",
            borderRadius: "16px",
            padding: "50px",
            marginY: 6,
            maxWidth: "820px",
            width: "100%",
            marginX: "auto",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            {question?.text || "Scenario text goes here."}
          </Typography>
        </Paper>

        {/* Response Options */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 4,
            marginBottom: 7,
          }}
        >
          <Typography variant="body1" color="error" sx={{ textAlign: "left", marginLeft: 7 }}>
            Agree
          </Typography>
          <RadioGroup
            row
            value={value}
            onChange={handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              flexGrow: 1,
            }}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <FormControlLabel
                key={i + 1}
                value={(i + 1).toString()}
                control={
                  <Radio
                    sx={{
                      width: `${35 + i * 10}px`,
                      height: `${35 + i * 10}px`,
                      "& .MuiSvgIcon-root": { fontSize: 0 },
                      border: `3px solid ${i < 2 ? "#FF6B6B" : i > 2 ? "#4F51FD" : "#9E9E9E"}`,
                      borderRadius: "50%",
                      color: "transparent",
                      "&.Mui-checked": { backgroundColor: i < 2 ? "#FF6B6B" : i > 2 ? "#4F51FD" : "#9E9E9E" },
                    }}
                  />
                }
                label=""
              />
            ))}
          </RadioGroup>
          <Typography variant="body1" color="#4F51FD" sx={{ textAlign: "right" }}>
            Disagree
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, gap: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#BDBDBD",
              "&:hover": { backgroundColor: "#9E9E9E" },
              borderRadius: "8px",
              width: "150px",
              height: "60px",
            }}
          >
            BACK
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4F51FD",
              "&:hover": { backgroundColor: "#3C38C8" },
              borderRadius: "8px",
              width: "150px",
              height: "60px",
            }}
          >
            NEXT
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default TestPage;
