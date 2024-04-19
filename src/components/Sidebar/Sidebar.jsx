import React from 'react'
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <NavLink>
            Analytics
        </NavLink>
        
    </div>
  )
}

export default Sidebar;