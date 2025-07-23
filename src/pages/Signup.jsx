import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Signup = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-md px-6 py-10">
                {/* Tiêu đề */}
                <h2 className="text-4xl font-serif font-bold text-center mb-10 flex items-center justify-center gap-2">
                    <span>Sign Up</span>
                    <span className="text-3xl">—</span>
                </h2>

                {/* Form */}
                <Form
                    name="signup"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    {/* Name */}
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Name" className="h-12" />
                    </Form.Item>

                    {/* Email */}
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className="h-12" />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className="h-12" />
                    </Form.Item>

                    {/* Links */}
                    <div className="flex justify-between text-sm text-black mb-4">
                        <Link to="#" className="hover:underline">Fogot your password ?</Link>
                        <Link to="/login" className="hover:underline font-semibold">Login Here</Link>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-black px-8 py-2 hover:bg-gray-800"
                        >
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Signup;
