import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Space, Table, Tag, Button } from 'antd';
import "./Portfolios.css";
import { useNavigate } from "react-router-dom";
import TableComponent from '../../components/TableComponent/TableComponent';

const Portfolios = ({ isDarkMode }) => {
    console.log("isDarkMode", isDarkMode)
    const navigate = useNavigate();
    const tableClassName = isDarkMode ? 'dark-mode-table' : '';

    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            className: "table_coloumns",
            // render: (text) => <a style={{ fontSize: 8 }}>{text}</a>,
        },
        {
            title: 'BASE CURRENCY',
            dataIndex: 'age',
            key: 'age',
            className: "table_coloumns",
        },
        {
            title: 'EXCHANGE',
            dataIndex: 'address',
            key: 'address',
            className: "table_coloumns",
        },
        {
            title: 'LEVERAGE',
            key: 'tags',
            dataIndex: 'tags',
            className: "table_coloumns",

        },
        {
            title: 'MAKER FEE %',
            key: 'action',
            className: "table_coloumns",
            // render: (_, record) => (
            //     <Space size="middle">
            //         <a>Invite {record.name}</a>
            //         <a>Delete</a>
            //     </Space>
            // ),
        },
        {
            title: 'TAKER FEE %',
            key: 'action',
            className: "table_coloumns",

        },
        {
            title: 'BALANCE',
            key: 'action',
            className: "table_coloumns",
        },
        {
            title: 'GAIN',
            key: 'action',
            className: "table_coloumns",
        },
        {
            title: 'MAX RISK %',
            key: 'action',
            className: "table_coloumns",
        },
        {
            title: 'MONTHLY GOAL %',
            key: 'action',
            className: "table_coloumns",
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <div className='page_crud_heading'>
                    <p>PORTFOLIOS</p>
                    <div>
                        <Button type="primary" onClick={() => navigate("/new-portfolio")}>Add Portfolio</Button>
                    </div>
                </div>
                <div className={`table_container page_content_inner ${tableClassName}`}>
                    <TableComponent
                        columns={columns}
                        dataSource={data}
                    />

                </div>
            </div>
        </div>
    )
}

export default Portfolios