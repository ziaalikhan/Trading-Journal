import React, { useRef, useState } from 'react';
import "./Trade.css";
import Layout from '../../components/Layout/Layout'
import { Tabs, Tag, Input, Upload } from "antd";
import TableComponent from '../../components/TableComponent/TableComponent';
import InputComponent from '../../components/InputComponent/InputComponent';
import ImgCrop from 'antd-img-crop';
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import html2canvas from 'html2canvas';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";



const { TabPane } = Tabs;
const { TextArea } = Input;

const Trade = ({ isDarkMode }) => {
    const tableClassName = isDarkMode ? 'dark-mode-table' : '';

    return (
        <div className='page_container'>
            <Layout />
            <div className='page_content'>
                <p>TRADE</p>
                <div className='page_content_inner'>
                    <Tabs className="full-width-tabs">
                        <TabPane tab="SPOT TRADE" key="1" className="custom-tabpane">
                            <SpotTrade tableClassName={tableClassName} />
                        </TabPane>
                        <TabPane tab="FUTURE TRADE" key="2" className="custom-tabpane">
                            <FutureTrade />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}




const SpotTrade = ({ tableClassName }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagValue, setTagValue] = useState(null);
    const [formData, setFormData] = useState({
        date: null,
        direction: null,
        leverage: null,
        symbol: null,
        stoploss: null,
        target: null,
        quantity: null,
        // entry: null,
        // exit: null,
        ordercost: null,
        ordervalue: null,
        fee: null,
        pl: null,
        pl_percent: null,
        sl_percent: null,
        tags: ["ABC", "DEF", "GHI", "JKL"],
        note: null,
        charts: [],

    })
    // COLOUM
    const columns = [
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
            className: "table_coloumns",
            // render: (text) => <a style={{ fontSize: 8 }}>{text}</a>,
        },
        {
            title: 'DIRECTION',
            dataIndex: 'direction',
            key: 'direction',
            className: "table_coloumns",
        },
        {
            title: 'LEVERAGE',
            dataIndex: 'leverage',
            key: 'leverage',
            className: "table_coloumns",
        },
        {
            title: 'SYMBOL',
            key: 'symbol',
            dataIndex: 'symbol',
            className: "table_coloumns",

        },
        {
            title: 'STOPLOSS',
            key: 'stoploss',
            dataIndex: 'stoploss',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'TARGET',
            key: 'target',
            dataIndex: 'target',
            className: "table_coloumns",
            render: (text, record) => (
                text ? text : "N/A"
            ),
        },
        {
            title: 'QUANTITY',
            key: 'quantity',
            dataIndex: 'quantity',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },

        // {
        //     title: 'ENTRY',
        //     key: 'entry',
        //     dataIndex: 'entry',
        //     className: "table_coloumns",
        // },
        // {
        //     title: 'EXIT',
        //     key: 'exit',
        //     dataIndex: 'exit',
        //     className: "table_coloumns",
        //     render: (text, record) => {
        //         return (
        //             `${text}%`
        //         )
        //     }
        // },
        // {
        //     title: 'ORDER COST',
        //     key: 'ordercost',
        //     dataIndex: 'ordercost',
        //     className: "table_coloumns",
        //     render: (text, record) => {
        //         return (
        //             `${text}%`
        //         )
        //     }
        // },
        // {
        //     title: 'ORDER VALUE',
        //     key: 'ordervalue',
        //     dataIndex: 'ordervalue',
        //     className: "table_coloumns",
        //     render: (text, record) => {
        //         return (
        //             `${text}%`
        //         )
        //     }
        // },
        {
            title: 'FEE',
            key: 'fee',
            dataIndex: 'fee',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },
        {
            title: 'P/L',
            key: 'pl',
            dataIndex: 'pl',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },
        {
            title: 'P/L %',
            key: 'pl_percent',
            dataIndex: 'pl_percent',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },
        {
            title: 'STOPLOSS %',
            key: 'sl_percent',
            dataIndex: 'sl_percent',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },
        {
            title: 'RISK',
            key: 'portfolio_monthly_goal',
            dataIndex: 'portfolio_monthly_goal',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
                )
            }
        },
        {
            title: 'RISK %',
            key: 'portfolio_monthly_goal',
            dataIndex: 'portfolio_monthly_goal',
            className: "table_coloumns",
            render: (text, record) => {
                return (
                    text ? `${text}$` : 0
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
                    text ? `${text}$` : 0
                )
            }
        },

    ];

    const dataSource = [



    ]

    const preventDefault = (e) => {
        e.preventDefault();
    };


    console.log("selectedTags", selectedTags)

    return (
        <div >
            <form>
                {/* SECTION 1 */}
                <div className={`table_container page_content_inner ${tableClassName}`}>
                    <TableComponent
                        columns={columns}
                        dataSource={[
                            {
                                date: <InputComponent
                                    value={formData?.date}
                                    placeholder='Date'
                                    type='date'
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    style={{ marginTop: 5, width: "100%", height: 30 }} />,
                                direction: <SelectComponent
                                    defaultValue={"LONG"}
                                    options={[
                                        {
                                            value: 'LONG',
                                            label: 'LONG',
                                        },
                                        {
                                            value: 'SHORT',
                                            label: 'SHORT',
                                        },

                                    ]}
                                    onChange={(e) => setFormData({ ...formData, direction: e })}
                                    style={{ marginTop: 10, width: "100%", height: 30 }}
                                />,
                                leverage: <InputComponent
                                    value={formData?.leverage}
                                    placeholder='Leverage'
                                    type='number'
                                    onChange={(e) => setFormData({ ...formData, leverage: e.target.value })}
                                    style={{ marginTop: 5, width: "100%", height: 30 }} />,
                                symbol: <InputComponent
                                    value={formData?.symbol}
                                    placeholder='Symbol'
                                    required
                                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                                    style={{ marginTop: 5, width: "100%", height: 30 }} />,
                                stoploss: <InputComponent
                                    value={formData?.stoploss}
                                    required
                                    placeholder='Stop Loss'
                                    type='number'
                                    onChange={(e) => setFormData({ ...formData, stoploss: e.target.value })}
                                    style={{ marginTop: 5, width: "100%", height: 30 }} />,
                                target: <InputComponent
                                    value={formData?.target}
                                    required
                                    type='number'
                                    placeholder='Target'
                                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                                    style={{ marginTop: 5, width: "100%", height: 30 }} />,
                                quantity: formData?.quantity,
                                entry: formData?.entry,
                                exit: formData?.exit,
                                // ordercost: formData?.ordercost,
                                // ordervalue: formData?.ordervalue,
                                fee: formData?.fee,
                                pl: formData?.pl,
                                pl_percent: formData?.pl_percent,
                                sl_percent: formData?.sl_percent,
                            },
                        ]}
                    // style={{height: "100px"}}
                    // loading={portfolio.loading}
                    />

                </div>
                {/* SECTION 2 */}
                <div className='trade_section2'>
                    <div>
                        <p className='trade_section2_heading'>TAGS</p>

                        <div className='chips_container'>
                            {
                                selectedTags?.map((v) => {
                                    return (
                                        <div className='chips'
                                            onClick={() => {
                                                let arr = [...selectedTags];
                                                console.log("HELLO")
                                                // console.log("arr.filter((itm) => itm !== v)", arr.filter((itm) => itm !== v))
                                                setSelectedTags(arr.filter((itm) => itm !== v));
                                            }}
                                        >
                                            {v} <IoCloseOutline />
                                        </div>
                                        // <Tag closable style={{ cursor: "pointer" }} onClick={() => {
                                        //     let arr = [...selectedTags];
                                        //     console.log("HELLO")
                                        //     // console.log("arr.filter((itm) => itm !== v)", arr.filter((itm) => itm !== v))
                                        //     setSelectedTags(arr.filter((itm) => itm !== v));
                                        // }}

                                        // >
                                        //     {v}
                                        // </Tag>
                                    )
                                })
                            }


                        </div>
                        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>

                            <InputComponent
                                value={tagValue}
                                placeholder='Enter a Tag, or Multiple Tags separeted by ,'
                                onChange={(e) => {
                                    setTagValue(e.target.value)
                                }}
                                style={{ marginTop: 5, width: "100%", height: 30 }} />
                            <ButtonComponent type={"primary"} text='ADD' onClick={() => {
                                let arr = [...selectedTags];
                                if (!arr.includes(tagValue)) {
                                    arr.push(tagValue);
                                    setSelectedTags(arr);
                                    setTagValue(null);
                                }
                            }}/>
                        </div>

                        <div style={{ marginTop: "10px", gap: 10 }}>
                            <div className='chips_container'>
                                {
                                    formData?.tags?.map((v) => {
                                        return <div className={selectedTags.includes(v) ? 'chips_selected' : 'chips'}
                                            onClick={() => {
                                                let arr = [...selectedTags];
                                                if (!arr.includes(v)) {
                                                    arr.push(v);
                                                    setSelectedTags(arr);
                                                }
                                            }}
                                        >
                                            {v}
                                        </div>
                                        // <Tag style={{ cursor: "pointer", background: selectedTags.includes(v) ? "red" : "", color: selectedTags.includes(v) ? "#fff" : "" }} onClose={preventDefault}
                                        // onClick={() => {
                                        //     let arr = [...selectedTags];
                                        //     if (!arr.includes(v)) {
                                        //         arr.push(v);
                                        //         setSelectedTags(arr);
                                        //     }
                                        // }}
                                        // >
                                        //     {v}
                                        // </Tag>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='trade_section2_heading'>TRADINGVIEW CHART</p>
                        <div style={{ marginTop: 5 }}>
                            <TradingViewChart formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                    <div>
                        <p className='trade_section2_heading'>NOTES</p>
                        <div style={{ marginTop: 5 }}>
                            <TextArea rows={6} placeholder='Keep Track of Your Notes By Adding Some Text Here...'
                                required
                                value={formData?.note}
                                onChange={(e) => setFormData({ ...formData, note: e })}
                            />
                        </div>

                    </div>

                </div>

                {/* SECTION 3 */}

                <div className='trade_section3'>
                    <input type="submit" value="Submit" />
                    {/* <ButtonComponent text="SAVE" type="submit" style={{ background: "rgb(14, 203, 129)" }} /> */}
                    {/* <ButtonComponent text="Delete" type={"primary"} style={{background: "rgb(246, 70, 93)"}}/>
                <ButtonComponent text="Close - Manual" type={"primary"} style={{background: "#181A20"}}/>
                <ButtonComponent text="Close - Stop Loss" type={"primary"} style={{background: "#181A20"}}/> */}
                </div>
            </form>
        </div>
    )
}


const TradingViewChart = ({ formData, setFormData }) => {

    const [image, setImage] = useState(null);


    const [fileList, setFileList] = useState([

    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };






    const getSnapShot = () => {
        axios.get('https://screenshot.abstractapi.com/v1/?api_key=e9eb2faab2324716898d25c79e8fcd87&url=https://www.shuraa.com/dropshipping-business-dubai-uae/')
            .then(response => {
                setImage(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <>
            <button onClick={getSnapShot}>
                CLICK ME
            </button>
            {
                image && <img src={image} width={200} height={200} />
            }

            {/* <ImgCrop rotationSlider>
                <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}

                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop> */}
        </>
    )
}


const FutureTrade = () => {
    return (
        <div>FUTURE</div>
    )
}



export default Trade