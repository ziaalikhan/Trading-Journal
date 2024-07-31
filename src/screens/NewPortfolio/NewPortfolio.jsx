import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
import "./NewPortfolio.css";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useNavigate } from "react-router-dom";
import InputComponent from '../../components/InputComponent/InputComponent';
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { createPortfolio } from '../../Redux/Reducers/portfolioReducer';
import { Notify } from '../../components/Notify/Notify';


const NewPortfolio = ({ isDarkMode }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user_id } = useSelector((state) => state.User);


    const onFinish = (values) => {
        let data = {
            user_id: user_id,
            portfolio_name: values?.portfolio_name,
            base_currency: values?.base_currency,
            exchange: values?.exchange,
            portfolio_leverage: values?.portfolio_leverage,
            maker_fee: values?.maker_fee,
            taker_fee: values?.taker_fee,
            portfolio_balance: values?.portfolio_balance,
            gain: 0,
            portfolio_max_risk: values?.portfolio_max_risk,
            portfolio_monthly_goal: values?.portfolio_monthly_goal
        }
        dispatch(createPortfolio(data)).then((res) => {
            if (res.type === "portfolio/createPortfolio/fulfilled") {
                Notify("success", res?.payload?.message);
                navigate("/portfolios");
            }
        })
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    let leverage_arr = [];
    for (let i = 0; i <= 100; i++) {
        if (i > 0) {
            leverage_arr.push({
                value: i,
                label: `${i}x`,
            });
        }
    }


    useEffect(() => {
        form.setFieldsValue({
            portfolio_name: null,
            base_currency: "USDT",
            exchange: "binance",
            portfolio_leverage: 0,
            maker_fee: 0,
            taker_fee: 0,
            portfolio_balance: 0,
            // gain: 0,
            portfolio_max_risk: 0,
            portfolio_monthly_goal: 0
        })
    }, []);

    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <div className='new_portfolio_container'>
                    <p>QUICK SETUP</p>

                    <div className='new_portfolio_inner_container'>
                        <p>PORTFOLIO</p>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                // maxWidth: 400,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>The first thing you will need is a portfolio. All your trades are grouped by a portfolio.</p>
                            <Form.Item
                                label=""
                                name="portfolio_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Portfolio Name!',
                                    },
                                ]}
                            >

                                <InputComponent
                                    value=""
                                    placeholder='Enter Your Portfolio Name...'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>A portfolio is linked to an exchange. This is used to get the default fees, and to enable the live ticker. If your exchange is not listed, you can select Other, but the live ticker won't work.</p>
                            <Form.Item
                                label=""
                                name="exchange"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Your Exchange!',
                                    },
                                ]}
                            >

                                <SelectComponent
                                    defaultValue={"binance"}

                                    options={[
                                        {
                                            value: 'binance',
                                            label: 'Binance',
                                        },
                                        {
                                            value: 'kucoin',
                                            label: 'KuCoin',
                                        },
                                        {
                                            value: 'bidget',
                                            label: 'Bidget',
                                        },
                                        {
                                            value: 'mexc',
                                            label: 'Mexc',
                                        },
                                        {
                                            value: 'ftx',
                                            label: 'Ftx',
                                        },
                                    ]}
                                    // onChange={(e) => console.log("EVENT", e)}
                                    style={{ marginTop: 10, width: 200, height: 30 }}
                                />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Each portfolio has a base currency. This way, you can trade in USD, EUR, BTC, or anything else, and keep track of accounts on multiple exchanges in different currencies.</p>
                            <Form.Item
                                label=""
                                name="base_currency"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Base Currency!',
                                    },
                                ]}
                            >

                                <SelectComponent
                                    defaultValue={"USDT"}

                                    options={[
                                        {
                                            value: 'EUR',
                                            label: 'EUR',
                                        },
                                        {
                                            value: 'USD',
                                            label: 'USD',
                                        },
                                        {
                                            value: 'USDT',
                                            label: 'USDT',
                                        },
                                        {
                                            value: 'BTC',
                                            label: 'BTC',
                                        }
                                    ]}
                                    // onChange={(e) => console.log("EVENT", e)}
                                    style={{ marginTop: 10, width: 200, height: 30 }}
                                />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Each Portfolio have the Leverage Plan to Execute.</p>
                            <Form.Item
                                label=""
                                name="portfolio_leverage"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Leverage Name!',
                                    },
                                ]}
                            >
                                <SelectComponent
                                    defaultValue={"USDT"}

                                    options={leverage_arr.length > 0 ? leverage_arr : []}
                                    // onChange={(e) => console.log("EVENT", e)}
                                    style={{ marginTop: 10, width: 200, height: 30 }}
                                />
                                {/* <InputComponent
                                    value=""
                                    defaultValue={0}
                                    type='number'
                                    placeholder='Add Your Leverage'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} /> */}
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Each Exchange Have thier own Maker Fees.</p>
                            <Form.Item
                                label=""
                                name="maker_fee"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Portfolio Name!',
                                    },
                                ]}
                            >

                                <InputComponent
                                    value=""
                                    defaultValue={0}
                                    type='number'
                                    placeholder='Add Your Exchange Maker Fee'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Each Exchange Have thier own Taker Fees.</p>
                            <Form.Item
                                label=""
                                name="taker_fee"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Portfolio Name!',
                                    },
                                ]}
                            >

                                <InputComponent
                                    value=""
                                    defaultValue={0}
                                    type='number'
                                    placeholder='Add Your Exchange Taker Fee'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Max Risk.</p>
                            <Form.Item
                                label=""
                                name="portfolio_max_risk"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Portfolio Name!',
                                    },
                                ]}
                            >

                                <InputComponent
                                    value=""
                                    defaultValue={0}
                                    type='number'
                                    placeholder='Add Your Max Portfolio Risk'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Monthly Goal.</p>
                            <Form.Item
                                label=""
                                name="portfolio_monthly_goal"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Portfolio Name!',
                                    },
                                ]}
                            >

                                <InputComponent
                                    value=""
                                    defaultValue={0}
                                    type='number'
                                    placeholder='Add Your Monthly Goal'
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className='new_portfolio_heading'>INITIAL DEPOSIT</p>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Finally, you will need an initial deposit. This is used to to keep track of your balance, and calculate the portfolio PNL % after each trade.</p>
                            <Form.Item
                                label=""
                                name="portfolio_balance"

                            >
                                {/* <Input value=""
                                    placeholder='Enter Your Portfolio Name...'
                                    style={{ marginTop: 10, width: 200, height: 30 }}
                                /> */}
                                <InputComponent
                                    value=""
                                    type='number'
                                    defaultValue={0}
                                    // onChange={(e) => console.log("Event", e.target.value)}
                                    style={{ marginTop: 5, width: 200, height: 30 }} />
                            </Form.Item>
                            <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>That's all we need to setup your journal.</p>
                            <Form.Item

                            // wrapperCol={{
                            //     offset: 8,
                            //     span: 16,
                            // }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <div className='new_portfolio_btn_container'>
                                    {/* <ButtonComponent
                                        text="Close"
                                        style={{ background: "red", color: "white" }}
                                        onClick={() => navigate("/portfolios")}
                                    /> */}
                                    {/* <ButtonComponent
                                        htmlType="submit"
                                        style={{ background: "green", color: "white" }}
                                        onClick={addPortfolio}
                                    /> */}
                                </div>
                            </Form.Item>
                        </Form>
                        {/* <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>The first thing you will need is a portfolio. All your trades are grouped by a portfolio.</p>
                        <InputComponent
                            value=""
                            placeholder='Enter Your Portfolio Name...'
                            onChange={(e) => console.log("Event", e.target.value)}
                            style={{ marginTop: 10, width: 200 }} />
                        <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>A portfolio is linked to an exchange. This is used to get the default fees, and to enable the live ticker. If your exchange is not listed, you can select Other, but the live ticker won't work.</p>
                        <SelectComponent
                            defaultValue={"binance"}
                            options={[
                                {
                                    value: 'binance',
                                    label: 'Binance',
                                },
                                {
                                    value: 'kucoin',
                                    label: 'KuCoin',
                                },
                                {
                                    value: 'bidget',
                                    label: 'Bidget',
                                },
                                {
                                    value: 'mexc',
                                    label: 'Mexc',
                                },
                                {
                                    value: 'ftx',
                                    label: 'Ftx',
                                },
                            ]}
                            onChange={(e) => console.log("EVENT", e)}
                            style={{ marginTop: 10, width: 200 }}
                        />
                        <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Each portfolio has a base currency. This way, you can trade in USD, EUR, BTC, or anything else, and keep track of accounts on multiple exchanges in different currencies.</p>
                        <p className='new_portfolio_heading'>INITIAL DEPOSIT</p>
                        <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>Finally, you will need an initial deposit. This is used to to keep track of your balance, and calculate the portfolio PNL % after each trade.</p>
                        <InputComponent
                            // value=""
                            type='number'
                            defaultValue={0}
                            onChange={(e) => console.log("Event", e.target.value)}
                            style={{ marginTop: 10, width: 200 }} />
                        <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>That's all we need to setup your journal.</p>
                        <div className='new_portfolio_btn_container'>
                            <ButtonComponent
                                text="Close"
                                style={{ background: "red", color: "white" }}
                                onClick={() => navigate("/portfolios")}
                            />
                            <ButtonComponent
                                text="Submit"
                                style={{ background: "green", color: "white" }}
                                onClick={addPortfolio}
                            />
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPortfolio;