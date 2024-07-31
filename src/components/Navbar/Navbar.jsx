import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import ThemeToggler from '../ThemeToogler/ThemeToogler';
import { Avatar, Button } from 'antd';
import Logo from "../../assets/crypto-book-mark-logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Reducers/UserReducer';
import { Link, useNavigate } from 'react-router-dom';
import SelectComponent from '../SelectComponent/SelectComponent';
import { getAllPortfolio } from '../../Redux/Reducers/portfolioReducer';



const Navbar = ({ toggleTheme }) => {
  const { user } = useSelector((state) => state.User);
  const { portfolio_list } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = () => {
    localStorage.removeItem("User");
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(getAllPortfolio(user?.data?.user_id))
  }, []);

  return (
    <div className='navbar_container'>
      {/* LOGO */}
      <div>
        <img src={Logo} width={40} />
      </div>
      {/* Menus */}
      <div className='navbar_menus_container'>
        <SelectComponent
          value={portfolio_list?.length > 0 ? portfolio_list[0]?.portfolio_name : null}
          options={portfolio_list.map((v) => {
            return {
              value: v.portfolio_name,
              label: v.portfolio_name
            }
          })}
          onChange={(e) => console.log("EVENT", e)}
          style={{ marginTop: 10, width: 200, height: 30 }}
        />
        <ThemeToggler toggleTheme={toggleTheme} />
        <Avatar size={40}>{user?.data?.fullName?.slice(0, 1)}</Avatar>
        <Button type='primary' onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  )
}

export default Navbar