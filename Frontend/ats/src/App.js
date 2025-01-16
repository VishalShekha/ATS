import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import AmLogin from "./Pages/am_login.js";
import AmHome from "./Pages/AM/am_home.js";
import CreateClient from "./Pages/AM/CreateClient.js";

function App() {
  return (
    <Router>
      <Routes>

        {/* Route tag will help view multiple pages... 
        e.g., on ther website url if you go to  'localhost:3000/landing' you can see the landing page 
        if you go to the 'localhost:3000/' you can see the homepage */}
        <Route path="/" element={<HomePage />} />
        {/* TODO:make properties for login for every users */}
        <Route path="/amlogin" element={<AmLogin />} />
        <Route path="/amhome" element={<AmHome />} />
        <Route path="/createClient" element={<CreateClient />} />

      </Routes>
    </Router>
  );
}

export default App;
