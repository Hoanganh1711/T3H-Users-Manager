import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { LoadingOutlined, LockOutlined, UserOutlined, FacebookFilled, TwitterCircleFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import "../../index.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  return (
    <div>
        <Form
                name="normal_login"
                className="signin-form"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
            >
                <h2 style={{color: '#1890ff'}} className='form-heading'>LOGIN</h2>
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Type your username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Type your Password"
                    />
                </Form.Item>

                <span className='error' style={{ color: "red " }}>
                    {/* {error} */}
                </span>
                <div className='forgot-pass'>
                    <Link to="#" >Forgot password?</Link>
                </div>

                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        LOGIN
                    </Button>
                </Form.Item>
                
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: 12, marginBottom: 0}}>Or Sign Up Using</p>
                    <Row style={{justifyContent: "center", fontSize: 32}}>
                        <Link to="#" className='social-icon'><FacebookFilled style={{color: "#415994"}}/></Link> 
                        <Link to="#" className='social-icon'><TwitterCircleFilled style={{color: "#46a1e7"}}/></Link> 
                        <Link to="#" className='social-icon'><GoogleCircleFilled style={{color: "#db5141"}}/></Link> 
                    </Row>
                </div>
                <div style={{fontSize: 12, textAlign: "center", marginTop: 50}}>
                    <p style={{marginBottom: 0}}>Or Sign Up Using</p>
                    <Link to="/signUp">SIGN UP</Link>
                </div>
            </Form>
    </div>
  )
}

export default SignIn