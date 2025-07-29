import { Form } from "antd";

const Checkout = () => {
        return (
                <div className="py-8 px-app">
                        <div className="mt-10 flex items-center">
                                <h2 className="text-3xl font-bold">
                                        <span className="text-gray-500 uppercase">Delivery</span>
                                        <span className="text-black uppercase">Information</span>
                                </h2>
                                <span className="inline-block w-16 h-0.5 bg-gray-700 ml-3 align-middle"></span>
                        </div>
                        <Form
                        />
                </div>
        );
};

export default Checkout;
