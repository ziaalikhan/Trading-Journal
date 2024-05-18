import React from 'react'
import "./Navbar.css";
import ThemeToggler from '../ThemeToogler/ThemeToogler';
import { Avatar, Button } from 'antd';
import Logo from "../../assets/crypto-book-mark-logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Reducers/UserReducer';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = ({ toggleTheme }) => {
  const { user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("User");
    dispatch(logout());
    navigate("/login");
  };
  

  return (
    <div className='navbar_container'>
      {/* LOGO */}
      <div>
        <img src={Logo} width={40} />
      </div>
      {/* Menus */}
      <div className='navbar_menus_container'>
        <ThemeToggler toggleTheme={toggleTheme} />
        <Avatar size={40}>{user?.data?.fullName?.slice(0, 1)}</Avatar>
        <Button type='primary' onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  )
}

export default Navbar