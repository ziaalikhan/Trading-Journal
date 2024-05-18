import React, { useState, useMemo } from 'react'
import { Routes, Route, useParams, json, useLocation, Navigate } from "react-router-dom";
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
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import { darkModeHandler, loginUser } from '../Redux/Reducers/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import HeaderRoutes from './HeaderRoutes';
import axios from 'axios';
import { BASE_URL } from '../config/config';

const index = () => {
  const { user_id, user, is_dark_mode } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [logedIn, setLogedIn] = useState(null);

  const toggleTheme = async () => {
    await axios.patch(`${BASE_URL}/user/darkmode/${user_id}`).then(async (res) => {
      let data = await JSON.parse(localStorage.getItem("User"));
      localStorage.setItem("User", JSON.stringify({ data: { ...data.data, dark_mode: !data.data.dark_mode }, token: data.token }));
      dispatch(darkModeHandler(res?.data?.data?.dark_mode));
    }).catch((error) => {

    })
  };


  useMemo(() => {
    const data = JSON.parse(localStorage.getItem("User"));
    if (data) {
      setLogedIn(data);
      dispatch(darkModeHandler(data?.data.dark_mode))
      dispatch(loginUser(data));
    }
  }, [window]);

  return (
    <div className={is_dark_mode ? "dark-mode" : ""}>
      <Routes>
        <Route path="/" element={logedIn ? <Navigate to={"/dashboard"} /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path={"/login"} element={<Login />} />

        {/* Protected Routes */}
        <Route element={<HeaderRoutes toggleTheme={toggleTheme} />}>
          <Route element={<PrivateRoutes user={logedIn} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/trade-history" element={<TradeHistory />} />
            <Route path="/risk-reward" element={<RiskReward />} />
            <Route path="/transactions" element={<Transactions isDarkMode={is_dark_mode}/>} />
            <Route path="/portfolios" element={<Portfolios isDarkMode={is_dark_mode} />} />
            <Route path="/trading-plan" element={<TradingPlan />} />
            <Route path="/position-size-calculator" element={<PositionSizeCalculator isDarkMode={is_dark_mode} />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/account" element={<Profile isDarkMode={is_dark_mode} />} />
            <Route path="/new-portfolio" element={<NewPortfolio isDarkMode={is_dark_mode} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default index;