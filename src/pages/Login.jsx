import React from "react";
import { Button, Input } from "antd";
import { AppleOutlined, FacebookFilled, GoogleOutlined } from "@ant-design/icons";
import ecommerc from "../assets/logo/ecommerc-logo.png"; // Adjust the path as necessary
const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-teal-700 px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <img src={ecommerc} alt="Shopify" className="h-8" />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-2">Log in</h2>
                <p className="text-center text-gray-500 mb-6">Continue to Shopify</p>

                <form className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        size="large"
                        className="w-full"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        size="large"
                        className="w-full"
                        autoComplete="current-password"
                        autoFocus
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-black hover:bg-gray-800"
                        size="large"
                    >
                        Continue with email
                    </Button>
                </form>

                <div className="text-center mt-4 text-gray-500 text-sm">
                    <span>🔐 Sign in with passkey</span>
                </div>

                <div className="flex items-center justify-center my-4">
                    <hr className="w-1/3 border-gray-300" />
                    <span className="mx-3 text-gray-500">or</span>
                    <hr className="w-1/3 border-gray-300" />
                </div>

                <div className="flex justify-between gap-2">
                    <Button icon={<AppleOutlined />} block size="large">
                        Apple
                    </Button>
                    <Button icon={<FacebookFilled />} block size="large">
                        Facebook
                    </Button>
                    <Button icon={<GoogleOutlined />} block size="large">
                        Google
                    </Button>
                </div>

                <div className="text-center text-sm mt-6 text-gray-600">
                    New to Shopify?{" "}
                    <a href="#" className="text-blue-600 font-medium hover:underline">
                        Get started →
                    </a>
                </div>

                <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
                    <a href="">Help</a>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
