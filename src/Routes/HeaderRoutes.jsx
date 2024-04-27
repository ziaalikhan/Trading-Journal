import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';



const HeaderRoutes = ({ toggleTheme }) => {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} />
            <Outlet />
        </>
    )
}

export default HeaderRoutes