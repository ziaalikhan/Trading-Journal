import React from 'react'
import Layout from '../../components/Layout/Layout';
import TableComponent from '../../components/TableComponent/TableComponent';

const TradeHistory = ({isDarkMode}) => {
    const tableClassName = isDarkMode ? 'dark-mode-table' : '';

    const columns = [
        {
            title: 'DATE',
            dataIndex: 'portfolio_name',
            key: 'portfolio_name',
            className: "table_coloumns",
            // render: (text) => <a style={{ fontSize: 8 }}>{text}</a>,
        },
        {
            title: 'DIRECTION',
            dataIndex: 'base_currency',
            key: 'base_currency',
            className: "table_coloumns",
        },
        {
            title: 'LEVERAGE',
            dataIndex: 'exchange',
            key: 'exchange',
            className: "table_coloumns",
        },
        {
            title: 'SYMBOL',
            key: 'portfolio_leverage',
            dataIndex: 'portfolio_leverage',
            className: "table_coloumns",

        },
        {
            title: 'STOPLOSS',
            key: 'maker_fee',
            dataIndex: 'maker_fee',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'TARGET',
            key: 'taker_fee',
            dataIndex: 'taker_fee',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'QUANTITY',
            key: 'portfolio_balance',
            dataIndex: 'portfolio_balance',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    `${text}$`
                )
            }
        },
        {
            title: 'PL',
            key: 'gain',
            dataIndex: 'gain',
            className: "table_coloumns",
        },
        {
            title: 'MAX RISK %',
            key: 'portfolio_max_risk',
            dataIndex: 'portfolio_max_risk',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    `${text}%`
                )
            }
        },
        {
            title: 'P/L %',
            key: 'portfolio_monthly_goal',
            dataIndex: 'portfolio_monthly_goal',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    `${text}%`
                )
            }
        },
        {
            title: 'R/R RATIO',
            key: 'portfolio_monthly_goal',
            dataIndex: 'portfolio_monthly_goal',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    `${text}%`
                )
            }
        },

    ];
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>TRADE HISTORY</p>
                <div className='page_content_inner'>
                    {/* OPEN POSITIONS */}
                    <div className={`table_container page_content_inner ${tableClassName}`}>
                    <TableComponent
                        columns={columns}
                        dataSource={[]}
                        // loading={portfolio.loading}
                    />

                </div>

                    
                </div>
            </div>
        </div>
    )
}

export default TradeHistory;