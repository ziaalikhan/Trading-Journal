import React from 'react'
import Layout from '../../components/Layout/Layout';
import "./NewPortfolio.css";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useNavigate } from "react-router-dom";
import InputComponent from '../../components/InputComponent/InputComponent';
import SelectComponent from '../../components/SelectComponent/SelectComponent';

const NewPortfolio = ({ isDarkMode }) => {
    const navigate = useNavigate();


    const addPortfolio = () => {
        alert("Create")
    }

    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <div className='new_portfolio_container'>
                    <p>QUICK SETUP</p>
                    <div className='new_portfolio_inner_container'>
                        <p>PORTFOLIO</p>
                        <p className={isDarkMode ? "text_class_dark" : "text_class_light"}>The first thing you will need is a portfolio. All your trades are grouped by a portfolio.</p>
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPortfolio;