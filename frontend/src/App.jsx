import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import TestPage from "./TestPage";
import ViewTypePage from "./ViewTypePage";
import RegistrationPage from "./RegistrationPage";
import NavBar from "./NavBar"; 
import theme from "./theme";
import { UserProvider } from "./UserContext"; 

function App() {
  return (
    <UserProvider> 
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/your-type" element={<ViewTypePage mbti="SPAT"/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    </UserProvider>
  );
}

export default App;
