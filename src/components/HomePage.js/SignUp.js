import 'antd/dist/antd.css';
import "../../index.css"
import axios from 'axios';
import {
    Button,
    Col,
    Divider,
    Form,
    Input,
    Modal,
    Row,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <Form
        className='signup-form'
        layout="vertical"
        name="horizontal_login"
        scrollToFirstError
    >
        <h2 style={{color: '#1890ff'}}>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <Divider />

        <div>
            <Row style={{justifyContent: 'space-between'}}>
                <Col span={11}>
                    <Form.Item
                        name="First Name"
                        label="First Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your First Name!',
                            },
                        ]}
                    >
                        <Input placeholder='First Name' />
                    </Form.Item>
                </Col>

                <Col span={11}>
                    <Form.Item
                        name="Last Name"
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last Name!',
                            },
                        ]}
                    >
                        <Input placeholder='Last Name'/>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your User Name!',
                    },
                ]}
            >
                <Input placeholder='User Name'/>
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: "email",
                        message: 'The input is not valid Email!',
                    },
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input placeholder='Email' />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item
                name="confirmPass"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Comfirm Password' />
            </Form.Item>
        </div>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    SIGN UP
                </Button>
            </Form.Item>
    </Form>
  )
}

export default SignUp