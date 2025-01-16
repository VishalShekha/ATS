import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebsiteLandingPage from "./Pages/WebsiteLandingPage.js";
import HomePage from "./Pages/HomePage.js";
import am_login from "./Pages/am_login.js";

function App() {
  return (
    <Router>
      <Routes>

        {/* Route tag will help view multiple pages... 
        e.g., on ther website url if you go to  'localhost:3000/landing' you can see the landing page 
        if you go to the 'localhost:3000/' you can see the homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<WebsiteLandingPage />} />
        <Route path="/amlogin" element={<am_login />} />

      </Routes>
    </Router>
  );
}

export default App;
