import React, { useState } from 'react'
import { Routes, Route, useParams, json, useLocation } from "react-router-dom";
import Home from '../screens/Home/Home';
import Dashboard from '../screens/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import TradeHistory from '../screens/TradeHistory/TradeHistory';
import RiskReward from '../screens/RiskReward/RiskReward';
import Transactions from '../screens/Transactions/Transactions';
import Portfolios from '../screens/Portfolios/Portfolios';
import TradingPlan from '../screens/TradingPlan/TradingPlan';
import Trade from '../screens/Trade/Trade';
import Profile from '../screens/Profile/Profile';
import PositionSizeCalculator from '../screens/PositionSizeCalculator/PositionSizeCalculator';
import Billing from '../screens/Billing/Billing';
import NewPortfolio from '../screens/NewPortfolio/NewPortfolio';
import Learning from '../screens/Learning/Learning';
import Blogs from '../screens/Blogs/Blogs';



const index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/trade-history" element={<TradeHistory />} />
        <Route path="/risk-reward" element={<RiskReward />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/portfolios" element={<Portfolios isDarkMode={isDarkMode}/>} />
        <Route path="/trading-plan" element={<TradingPlan />} />
        <Route path="/position-size-calculator" element={<PositionSizeCalculator isDarkMode={isDarkMode} />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/account" element={<Profile isDarkMode={isDarkMode} />} />
        <Route path="/new-portfolio" element={<NewPortfolio isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  )
}

export default index;