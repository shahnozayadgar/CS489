import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import NavBar from "./NavBar"; 

function TestPage() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar Section */}
      <NavBar />

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
            Some illustration describing the scenario
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
            As a student, you discover that some of your lab colleagues are falsely claiming travel allowances
            for business trips they didn't take. They encourage you to do the same, assuring you it's a common
            practice and an easy way to earn extra money. Refusing might isolate you from your peers and affect
            your collaborations within the lab.<br />
            <br />
            How likely are you to refuse participation in business trips and consider reporting the misconduct?
          </Typography>

        </Paper>

        {/* Response Options */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 4,
            marginBottom: 7
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
              flexGrow: 1, // Ensures alignment within the available space
            }}
          >
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: "75px",
                    height: "75px",
                    "& .MuiSvgIcon-root": { fontSize: 0 },
                    border: "3px solid #FF6B6B",
                    borderRadius: "50%",
                    color: "transparent",
                    "&.Mui-checked": { backgroundColor: "#FF6B6B" },
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: "55px",
                    height: "55px",
                    "& .MuiSvgIcon-root": { fontSize: 0 },
                    border: "3px solid #FF6B6B",
                    borderRadius: "50%",
                    color: "transparent",
                    "&.Mui-checked": { backgroundColor: "#FF6B6B" },
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: "45px",
                    height: "45px",
                    "& .MuiSvgIcon-root": { fontSize: 0 },
                    border: "3px solid #9E9E9E",
                    borderRadius: "50%",
                    color: "transparent",
                    "&.Mui-checked": { backgroundColor: "#9E9E9E" },
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: "55px",
                    height: "55px",
                    "& .MuiSvgIcon-root": { fontSize: 0 },
                    border: "3px solid #4F51FD",
                    borderRadius: "50%",
                    color: "transparent",
                    "&.Mui-checked": { backgroundColor: "#4F51FD" },
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: "75px",
                    height: "75px",
                    "& .MuiSvgIcon-root": { fontSize: 0 },
                    border: "3px solid #4F51FD",
                    borderRadius: "50%",
                    color: "transparent",
                    "&.Mui-checked": { backgroundColor: "#4F51FD" },
                  }}
                />
              }
              label=""
            />
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
