import React from 'react'
import Layout from '../../components/Layout/Layout'

const Billing = () => {
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>BILLING</p>
                <div className='page_content_inner'>
                    <p >Full Name : </p>
                    <p >Email :</p>
                    <p >Last Loged In : </p>
                    <p >IP Address : </p>
                    <p >User Role : </p>
                </div>
            </div>
        </div>
    )
}

export default Billing