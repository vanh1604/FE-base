
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom"


const Login = () => {
    const onFinish = (values) => {
        if (values.username && values.password) {
            message.success("Login successful!");
            localStorage.setItem('user', JSON.stringify(values));
        }
        else {
            message.error("Please fill in all fields.");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-md px-6 py-10">
                <h2 className="text-4xl font-time text-center mb-10 flex items-center justify-center gap-2">
                    <span>Login</span>
                    <span className="text-3xl">—</span>
                </h2>


                <Form
                    name="loginForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <div className="flex justify-between text-sm text-black mb-4">
                        <Link href="#" className="hover:underline">Forgot Password ?</Link>
                        <Link to='/signup' className="hover:underline">Create Account ?</Link>
                    </div>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>


                    <Form.Item>
                        <Button htmlType="submit" className="w-full bg-black hover:bg-blue-300 text-white">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
