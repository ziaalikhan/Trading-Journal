import React, { useState } from 'react'
import { Routes, Route, useParams, json, useLocation } from "react-router-dom";
import Home from '../screens/Home/Home';
import Dashboard from '../screens/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';



const index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Navbar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default index;