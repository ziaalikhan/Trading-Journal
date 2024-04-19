import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <NavLink
        to="/dashboard"
      >
        Analytics
      </NavLink>
      <NavLink
        to="/dashboard2"
      >
        Analytics
      </NavLink>
    </div>
  );
};

export default Sidebar;
