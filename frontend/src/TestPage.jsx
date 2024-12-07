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
import { useUser } from "./UserContext"; 
import { useNavigate } from "react-router-dom"; 

function TestPage() {
  const { userID } = useUser();
  const navigate = useNavigate(); 
  const [value, setValue] = useState(""); 
  const [question, setQuestion] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [questionId, setQuestionId] = useState(1); 
  const [responses, setResponses] = useState({}); 

  // Fetch question data from the API
  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5001/api/test/questions/${questionId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch question.");
        }
        const data = await response.json();
        setQuestion(data);

        // Prefill value if there's an existing response for this question
        setValue(responses[questionId] || "");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]); // Re-fetch when questionId changes

  // Handle response submission
  const submitResponse = async (responseValue) => {
    try {
      const response = await fetch(`http://localhost:5001/api/response/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userID,
          questionId,
          answerValue: Number(responseValue), // Ensure answerValue is a number
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit response.");
      }

      // Update local responses state
      setResponses((prevResponses) => ({
        ...prevResponses,
        [questionId]: responseValue,
      }));
    } catch (err) {
      console.error("Error submitting response:", err.message);
    }
  };

  // Handle final test submission to calculate MBTI result
  const submitTest = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/response/submit-test`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: String(userID) }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the test.");
      }

      const data = await response.json(); 
      console.log("Test result:", data); 

      // Navigate to the results page and pass the data
      navigate("/your-type", { state: data });
    } catch (err) {
      console.error("Error submitting the test:", err.message);
    }
  };

  // Handle navigation to the next question
  const handleNext = () => {
    if (!value) {
      alert("Please select a response before proceeding.");
      return;
    }

    // Submit the response for the current question
    submitResponse(value);

    // Redirect to results page if it's the last question
    if (questionId === 12) {
      submitTest(); // Call submitTest when the final question is answered
      return;
    }

    // Move to the next question
    setQuestionId((prev) => prev + 1);
  };

  // Handle navigation to the previous question
  const handleBack = () => {
    if (questionId > 1) {
      setQuestionId((prev) => prev - 1);
    }
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
        <Box textAlign="center" sx={{ marginBottom: "24px" }}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#EEF4FF",
              borderRadius: "16px",
              display: "inline-block",
              overflow: "hidden",
              padding: "20px",
            }}
          >
            <img
              src={`/scenarios/scenario${questionId}.svg`}
              alt={`Illustration for Scenario ${questionId}`}
              style={{ maxWidth: "300px", height: "auto", display: "block" }}
            />
          </Paper>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              color: "text.secondary",
              marginTop: "16px",
            }}
          >
            {question?.scenario || "Scenario illustration description."}
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
            maxWidth: "auto",
            width: "auto",
            marginX: "auto",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "18px", marginBottom: "26px" }}>
            {question?.description || "Scenario text goes here."}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "19px" }}>
            {question?.question || "Question text goes here."}
          </Typography>
        </Paper>

        {/* Response Options */}
        <Box
          sx={{
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 4,
            marginBottom: 7,
          }}
        >
          <Typography variant="body1" color="#FF6B6B" sx={{ textAlign: "left", marginLeft: 7 }}>
            Agree
          </Typography>
          <RadioGroup
            row
            value={value}
            onChange={(e) => {
              setValue(e.target.value); // Update current selection
              setResponses((prev) => ({
                ...prev,
                [questionId]: e.target.value, // Save response for the current question
              }));
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "40px",
              flexGrow: 1,
            }}
          >
            {[
              { size: 70, color: "#FF6B6B" },
              { size: 55, color: "#FF6B6B" },
              { size: 40, color: "#BDBDBD" },
              { size: 55, color: "#4F51FD" },
              { size: 70, color: "#4F51FD" },
            ].map((btn, i) => (
              <FormControlLabel
                key={i}
                value={(i + 1).toString()}
                control={
                  <Radio
                    icon={
                      <Box
                        sx={{
                          width: `${btn.size}px`,
                          height: `${btn.size}px`,
                          borderRadius: "50%",
                          border: `3px solid ${btn.color}`,
                          backgroundColor: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          width: `${btn.size}px`,
                          height: `${btn.size}px`,
                          borderRadius: "50%",
                          border: `3px solid ${btn.color}`,
                          backgroundColor: btn.color,
                          boxShadow: `0 0 8px ${btn.color}80`,
                        }}
                      />
                    }
                    sx={{ padding: 0 }}
                  />
                }
                label=""
              />
            ))}
          </RadioGroup>
          <Typography variant="body1" color="#4F51FD" sx={{ textAlign: "right", marginRight: 7 }}>
            Disagree
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, gap: 4 }}>
          <Button
            variant="contained"
            disabled={questionId === 1}
            onClick={handleBack}
            sx={{
              backgroundColor: "#BDBDBD",
              "&:hover": { backgroundColor: "#9E9E9E" },
              borderRadius: "80px",
              width: "150px",                                         
              height: "60px",
            }}
          >
            BACK
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              backgroundColor: "#4F51FD",
              "&:hover": { backgroundColor: "#3C38C8" },
              borderRadius: "80px",
              width: "150px",
              height: "60px",
            }}
          >
            {questionId === 12 ? "See Results" : "NEXT"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default TestPage;
