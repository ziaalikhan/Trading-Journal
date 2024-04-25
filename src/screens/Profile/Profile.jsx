import React from 'react'
import Layout from '../../components/Layout/Layout';



const Profile = ({ isDarkMode }) => {

   
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>ACCOUNT MANAGEMENT</p>
                <div className='page_content_inner'>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Full Name : <span>Zia Khan</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Email : <span>ziaalikhan052@gmail.com</span></p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Last Loged In : </p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>IP Address : </p>
                    <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>User Agent : </p>

                   
                </div>
            </div>
        </div>
    )
}


export default Profile;