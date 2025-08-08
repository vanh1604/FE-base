import { Button, Form, Input } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";

const Service = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-400 mx-auto px-app">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <SyncOutlined className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Exchange Policy</h3>
            <p className="text-gray-600 text-sm">
              We offer hassle free exchange policy
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircleOutlined className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold text-lg mb-2">7 Days Return Policy</h3>
            <p className="text-gray-600 text-sm">
              We provide 7 days free return policy
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <LockOutlined className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Best customer support
            </h3>
            <p className="text-gray-600 text-sm">
              We provide 24/7 customer support
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe now & get 20% off
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="!flex-1 !rounded-l-lg !border-gray-300 !focus:border-black !focus:ring-black"
            />
            <Button
              type="submit"
              className="!bg-black !text-white !px-8 !py-2 !rounded-r-lg !hover:bg-gray-800 !transition !duration-300"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
