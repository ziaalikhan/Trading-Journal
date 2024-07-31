import React from 'react';
import "./PositionSizeCalculator.css";
import Layout from '../../components/Layout/Layout';
import InputComponent from '../../components/InputComponent/InputComponent';
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const PositionSizeCalculator = ({ isDarkMode }) => {
    console.log("isDarkMode", isDarkMode)
    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>Position Size Calculator</p>
                <div className='page_content_inner'>
                    <div className='position_size_calculator_container'>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Direction : </p>
                            <SelectComponent
                                defaultValue='LONG'
                                options={[{
                                    value: "LONG",
                                    label: "LONG"
                                },
                                {
                                    value: "SHORT",
                                    label: "SHORT"
                                }]}
                                style={{ width: 200 }}
                            />
                        </div>
                        {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Fees : </p>
                            <SelectComponent
                                defaultValue='Exclude'
                                options={[{
                                    value: "Exclude",
                                    label: "Exclude"
                                },
                                {
                                    value: "Include",
                                    label: "Include"
                                }]}
                                style={{ width: 200 }} />
                        </div> */}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Risk per trade %	: </p>
                            <InputComponent
                                defaultValue={2}
                                type='number'
                                // value={}
                                onChange={(e) => console.log("EVENT", e.target.value)}
                                style={{ width: 200 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Entry price : </p>
                            <InputComponent
                                placeholder='Enter Your Entry Price'
                                style={{ width: 200 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Stop loss : </p>
                            <InputComponent
                                placeholder='Enter Your Stop Loss Price'
                                style={{ width: 200 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Target : </p>
                            <InputComponent
                                placeholder='Enter Your T/P Price'
                                style={{ width: 200 }} />
                        </div>
                        <hr />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Target % : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Stop loss % : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Risk/reward ratio : </p>
                            <p>00</p>
                        </div>
                        <hr />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Balance : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Potential profit : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Potential Loss : </p>
                            <p>00</p>
                        </div>
                        {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Entry fee : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Exit fee : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Order cost : </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                            <p>Order value : </p>
                            <p>00</p>
                        </div> */}
                        <hr />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                            <p>Optimal position size </p>
                            <p>00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                            <ButtonComponent text="Take Trade" style={{ background: "red", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PositionSizeCalculator;