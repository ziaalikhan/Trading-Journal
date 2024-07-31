import React from 'react'
import "./Dashboard.css";
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    
  } from "chart.js";
// import { Line } from 'react-chartjs-2'
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Dashboard = () => {
    const { theme_colors } = useSelector((state) => state.User);
    // const data = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //             label: 'My First Dataset',
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             fill: false,
    //             borderColor: 'rgb(75, 192, 192)',
    //             tension: 0.1
    //         }
    //     ]
    // };

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top'
    //         },
    //         title: {
    //             display: true,
    //             text: 'Chart.js Line Chart'
    //         }
    //     }
    // };
    return (
        <div className='page_container'>
            <Layout />

            <div className='page_content'>
                <p>DASHBOARD</p>
                <div className='page_content_inner'>
                    {/* OPEN POSITIONS */}
                    ANALYTICS

                    {/*  */}
                    <div className='dashboard_section1'>
                        <div>
                            1
                            {/* <Line data={data} options={options} /> */}
                            </div>
                        <div>2</div>
                    </div>
                    <div className='dashboard_section1'>
                        <div>
                            3
                            {/* <Line data={data} options={options} /> */}
                            </div>
                        <div>4</div>
                    </div>
                    <div className='dashboard_section1'>
                        <div>
                            5
                            {/* <Line data={data} options={options} /> */}
                            </div>
                        <div>6</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;