import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Space, Table, Tag, Button, Popconfirm ,Modal} from 'antd';
import "./Portfolios.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from '../../components/TableComponent/TableComponent';
import { deletePortfolio, getAllPortfolio } from '../../Redux/Reducers/portfolioReducer';
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from 'sweetalert2';
import { Notify } from '../../components/Notify/Notify';

const Portfolios = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user_id } = useSelector((state) => state.User);
    const { portfolio } = useSelector((state) => state);

    const [formState, setFormState] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            render: (text, record) => {
                return (
                    `${text}$`
                )
            }
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
            render: (text, record) => {
                return (
                    `${text}%`
                )
            }
        },
        {
            title: 'MONTHLY GOAL %',
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
            title: 'Action',
            key: '',
            dataIndex: '',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <div style={{ background: "#181A18", padding: 5, cursor: "pointer", borderRadius: 2, color: "#fff" }}>
                            <MdEdit size={16} onClick={() => onEdit(record)} />
                        </div>
                        <div style={{ background: "red", padding: 5, cursor: "pointer", borderRadius: 2, color: "#fff" }}>
                            <MdDelete size={16}
                                onClick={() => {
                                    Swal.fire({
                                        title: "Do you want to Delete the Portfolio?",
                                        showDenyButton: false,
                                        showCancelButton: true,
                                        confirmButtonText: "Save",
                                        // denyButtonText: `Don't save`
                                    }).then((result) => {
                                        /* Read more about isConfirmed, isDenied below */
                                        if (result.isConfirmed) {
                                            // DELETE 
                                            dispatch(deletePortfolio(record._id)).then((res) => {
                                                if (res.type === "portfolio/deletePortfolio/fulfilled") {
                                                    // GET ALL
                                                    dispatch(getAllPortfolio(user_id)).then((res) => {
                                                        if (res.type === "portfolio/getAllPortfolio/fulfilled") {
                                                            setDataSource(res?.payload?.data);
                                                        }
                                                    })
                                                    Notify("success", res?.payload?.message);
                                                } else if (res.type === "portfolio/deletePortfolio/rejected") {
                                                    Notify("error", res?.payload?.message);
                                                }
                                            })

                                        } else if (result.isDenied) {
                                            Swal.fire("Changes are not saved", "", "info");
                                        }
                                    });
                                }}
                            />
                        </div>
                    </div>
                    
                )
            },
        },
    ];

    const onEdit = (record) => {
        setIsModalOpen(true);
        setFormState("edit");
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                <Modal title={`${formState === "add" ? "Add" : "Edit"} Portfolio`} open={isModalOpen} footer={null} onCancel={handleCancel}>
                    <h1>HELLO</h1>
                    {/* <Form
                        name="basic" labelCol={{ span: 6 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
                    >
                        <Form.Item
                            label="Portfolio Name"
                            name="portfolio_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Base Currency"
                            name="base_currency"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
                            <Button onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button type="primary" htmlType="submit">
                                {formState === "add" ? "Add" : "Edit"}
                            </Button>
                        </div>
                    </Form> */}
                </Modal>
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