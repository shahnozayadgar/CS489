import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import TestPage from "./TestPage";
import ViewTypePage from "./ViewTypePage";
import RegistrationPage from "./RegistrationPage";
import theme from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/your-type" element={<ViewTypePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
