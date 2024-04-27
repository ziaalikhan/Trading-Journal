import React from 'react'
import Layout from '../../components/Layout/Layout';
import { useSelector } from "react-redux";


const Profile = ({ isDarkMode }) => {
    const { user } = useSelector((state) => state.User);
    const { data } = user;
    console.log("user", data)
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>ACCOUNT MANAGEMENT</p>
                <div className='page_content_inner'>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Full Name : <span>{data?.fullName}</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Email : <span>{data?.email}</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Last Loged In : <span>{data?.last_loged_in}</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>IP Address : <span>{data?.ip_address}</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>User Role : <span>{data?.role}</span></p>
                </div>
            </div>
        </div>
    )
}


export default Profile;