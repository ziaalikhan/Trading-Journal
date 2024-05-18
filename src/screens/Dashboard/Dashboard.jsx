import React from 'react'
import "./Dashboard.css";
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';



const Dashboard = () => {
    const { theme_colors } = useSelector((state) => state.User);
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <h1 style={{ color: theme_colors.text_color }}>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard;