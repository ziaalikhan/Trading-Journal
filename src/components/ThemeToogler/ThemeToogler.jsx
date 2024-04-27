import React from 'react';
import { Switch } from 'antd';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";

const ThemeToggler = ({ toggleTheme }) => {
  const { user } = useSelector((state) => state.User);
  return (
    <div className="theme-toggler">
      <Switch
        checkedChildren={<MdDarkMode />}
        unCheckedChildren={<MdLightMode />}
        defaultChecked={user?.data.dark_mode}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggler;