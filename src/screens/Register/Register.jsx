import React, { useState } from 'react'
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { Notify } from '../../components/Notify/Notify';


const Register = () => {

    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });



    const registerHandler = (e) => {
        console.log("inputVal", inputVal);
    }

    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3>REGISTER</h3>
                    </div>
                </div>
                <div className="login-form">
                    <Formik
                        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.fullName) {
                                errors.fullName = "Full Name is Required";
                            }

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

                            if (!values.confirmPassword) {
                                errors.confirmPassword = 'Confirm Password is Required';
                            } else if (values.password !== values.confirmPassword) {
                                errors.confirmPassword = 'Confirm Password is Not Matched with Password';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post(`${BASE_URL}/user/signup`, values).then((res) => {
                                setSubmitting(false);
                                navigate("/login");
                                Notify("success", res?.data?.message);
                            }).catch((error) => {
                                Notify("error", error?.response?.data?.message);
                                setSubmitting(false);
                            })
                        }}
                    >
                        {({ isSubmitting, errors }) => (
                            <Form>
                                <Field type="text" name="fullName"
                                    placeholder="Enter Your Full Name"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.fullName}</p>
                                <Field type="email" name="email"
                                    placeholder="Enter Your Email"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.email}</p>
                                <Field type="password" name="password"
                                    placeholder="Enter Your Password"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.password}</p>
                                <Field type="password" name="confirmPassword"
                                    placeholder="Enter Your Confirm Password"
                                />
                                <p style={{ fontSize: 10, color: "red", padding: 0 }}>{errors.confirmPassword}</p>
                                <p className='have_account'>Have an Account <span onClick={() => navigate("/login")}>Login</span></p>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {/* <input
                        type="text"
                        placeholder="Full Name"
                        value={inputVal?.fullName}
                        onChange={(e) => setInputVal({ ...inputVal, fullName: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={inputVal?.email}
                        onChange={(e) => setInputVal({ ...inputVal, email: e.target.value })}
                    />
                    <input type="password" placeholder="password"
                        value={inputVal?.password}
                        onChange={(e) => setInputVal({ ...inputVal, password: e.target.value })}
                    />
                    <input type="password" placeholder="Confirm Password"
                        value={inputVal?.confirmPassword}
                        onChange={(e) => setInputVal({ ...inputVal, confirmPassword: e.target.value })}
                    />
                    <button onClick={registerHandler}>Register</button>
                    <p className="message">Registered? <Link to="/login">Login to your Account</Link></p> */}
                </div>
            </div>
        </div>
    )
}

export default Register;