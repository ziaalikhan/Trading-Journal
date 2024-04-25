import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const menus = [
        {
            menu: "Dashboard",
            link: "/dashboard",
        },
        {
            menu: "Trade",
            link: "/trade",
        },
        {
            menu: "Trade History",
            link: "/trade-history",
        },
        {
            menu: "Risk Reward",
            link: "/risk-reward",
        },
        {
            menu: "Transactions",
            link: "/transactions",
        },
        {
            menu: "Portfolios",
            link: "/portfolios",
        },
        {
            menu: "Trading Plan",
            link: "/trading-plan",
        },
        {
            menu: "Position Size Calculator",
            link: "/position-size-calculator",
        },
        {
            menu: "Blogs",
            link: "/blogs",
        },
        {
            menu: "Learning",
            link: "/learning",
        },
        {
            menu: "Billing",
            link: "/billing",
        },
        {
            menu: "Account",
            link: "/account",
        },
    ];

    return (
        <div className="sidebar_container">
            {
                menus.map((v, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={v?.link}
                        >
                            {v?.menu}
                        </NavLink>
                    )
                })
            }


        </div>
    );
};

export default Sidebar;
