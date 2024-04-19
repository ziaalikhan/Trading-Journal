import React from 'react';
// import './ThemeToggler.css';
import { Switch } from 'antd';
import { MdLightMode, MdDarkMode } from "react-icons/md";


const ThemeToggler = ({ toggleTheme }) => {
  return (
    <div className="theme-toggler">
        <Switch
          checkedChildren={<MdDarkMode />}
          unCheckedChildren={<MdLightMode />}
          defaultChecked={false}
          onClick={toggleTheme}
        />
    </div>
  );
};

export default ThemeToggler;