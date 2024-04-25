import React from 'react'
import "./Navbar.css";
import ThemeToggler from '../ThemeToogler/ThemeToogler';
import { Avatar } from 'antd';
import Logo from "../../assets/crypto-book-mark-logo.png"

const Navbar = ({ toggleTheme }) => {

  return (
    <div className='navbar_container'>
      {/* LOGO */}
      <div>
        <img src={Logo} width={40} />
      </div>
      {/* Menus */}
      <div className='navbar_menus_container'>
        <ThemeToggler toggleTheme={toggleTheme} />
        <Avatar size={40}>U</Avatar>
      </div>
    </div>
  )
}

export default Navbar