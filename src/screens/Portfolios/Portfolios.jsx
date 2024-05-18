import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Space, Table, Tag, Button } from 'antd';
import "./Portfolios.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from '../../components/TableComponent/TableComponent';
import { getAllPortfolio } from '../../Redux/Reducers/portfolioReducer';

const Portfolios = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user_id } = useSelector((state) => state.User);
    const { portfolio } = useSelector((state) => state);

    const [dataSource, setDataSource] = useState([]);

    const tableClassName = isDarkMode ? 'dark-mode-table' : '';

    const columns = [
        {
            title: 'NAME',
            dataIndex: 'portfolio_name',
            key: 'portfolio_name',
            className: "table_coloumns",
            // render: (text) => <a style={{ fontSize: 8 }}>{text}</a>,
        },
        {
            title: 'BASE CURRENCY',
            dataIndex: 'base_currency',
            key: 'base_currency',
            className: "table_coloumns",
        },
        {
            title: 'EXCHANGE',
            dataIndex: 'exchange',
            key: 'exchange',
            className: "table_coloumns",
        },
        {
            title: 'LEVERAGE',
            key: 'portfolio_leverage',
            dataIndex: 'portfolio_leverage',
            className: "table_coloumns",

        },
        {
            title: 'MAKER FEE %',
            key: 'maker_fee',
            dataIndex: 'maker_fee',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'TAKER FEE %',
            key: 'taker_fee',
            dataIndex: 'taker_fee',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'BALANCE',
            key: 'portfolio_balance',
            dataIndex: 'portfolio_balance',
            className: "table_coloumns",
        },
        {
            title: 'GAIN',
            key: 'gain',
            dataIndex: 'gain',
            className: "table_coloumns",
        },
        {
            title: 'MAX RISK %',
            key: 'portfolio_max_risk',
            dataIndex: 'portfolio_max_risk',
            className: "table_coloumns",
        },
        {
            title: 'MONTHLY GOAL %',
            key: 'portfolio_monthly_goal',
            dataIndex: 'portfolio_monthly_goal',
            className: "table_coloumns",
        },
    ];


    useEffect(() => {
        dispatch(getAllPortfolio(user_id)).then((res) => {
            if (res.type === "portfolio/getAllPortfolio/fulfilled") {
                setDataSource(res?.payload?.data);
            }
        })
    }, []);

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
                        dataSource={dataSource}
                        loading={portfolio.loading}
                    />

                </div>
            </div>
        </div>
    )
}

export default Portfolios