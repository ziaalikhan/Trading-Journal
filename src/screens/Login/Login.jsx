import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Notify } from '../../components/Notify/Notify';
import { loginUser } from '../../Redux/Reducers/UserReducer';
import { BASE_URL } from '../../config/config';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState({
        email: "",
        password: "",
    });


    const loginHandler = (e) => {
        console.log("inputVal", inputVal)
    }


    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <div className="login-form">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Email is Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Password is Required';
                            } else if (values.password.length < 6) {
                                errors.password = 'Password Length Should be Greater Than 6';
                            } else if (!/(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}/.test(values.password)) {
                                errors.password = 'Password must contain at least one letter, one special character, and one digit';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post(`${BASE_URL}/user/login`, values).then((res) => {
                                Notify("success", res?.data?.message);
                                localStorage.setItem("User", JSON.stringify({ data: res?.data?.data, token: res?.data?.token }));
                                dispatch(loginUser({ data: res?.data?.data, token: res?.data?.token }));
                                navigate("/dashboard");
                                setSubmitting(false);
                            }).catch((error) => {
                                setSubmitting(false);
                                Notify("error", error?.response?.data?.message);
                            })
                            // setTimeout(() => {
                            //     alert(JSON.stringify(values));
                            //     setSubmitting(false);
                            // }, 400);
                        }}
                    >
                        {({ isSubmitting, errors }) => (
                            <Form>
                                <Field type="email" name="email"
                                    placeholder="Enter Your Email"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.email}</p>
                                <Field type="password" name="password"
                                    placeholder="Enter Your Password"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.password}</p>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {/* <input type="email" placeholder="email"
                        value={inputVal?.email}
                        onChange={(e) => setInputVal({ ...inputVal, email: e.target.value })}
                    />
                    <input type="password" placeholder="password"
                        value={inputVal?.password}
                        onChange={(e) => setInputVal({ ...inputVal, password: e.target.value })}
                    />
                    <button onClick={loginHandler}>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p> */}
                </div>
            </div>
        </div>
    )
}

export default Login;