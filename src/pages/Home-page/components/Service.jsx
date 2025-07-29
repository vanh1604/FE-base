import { Button, Form, Input } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";

const Service = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          {/* 1 - Easy Exchange */}
          <div className="flex flex-col items-center text-center flex-1">
            <SyncOutlined className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1 mr-10">Easy Exchange Policy</h3>
            <p className="text-gray-400 mr-10">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* 2 - 7 Days Return */}
          <div className="flex flex-col items-center text-center flex-1">
            <CheckCircleOutlined className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1 mr-10">7 Days Return Policy</h3>
            <p className="text-gray-400 mr-10">
              We provide 7 days free return policy
            </p>
          </div>

          {/* 3 - Best Support */}
          <div className="flex flex-col items-center text-center flex-1">
            <LockOutlined className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1 mr-10">Best customer support</h3>
            <p className="text-gray-400 mr-10">We provide 24/7 customer support</p>
          </div>
        </div>

        {/* Subscribe */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe now &amp; get 20% off
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Form className="flex! max-w-md! mx-auto! justify-center! items-center!">
            <Input
              type="email"
              placeholder="Enter your email"
              className="px-2! py-2! border border-gray-300! rounded-l-md! focus:outline-none! text-lg!"
            />
            <Button
              type="submit"
              className="bg-black! text-white! px-3! py-5! font-semibold! ml-2! border border-gray-300! hover:bg-gray-800! transition duration-300!"
            >
              SUBSCRIBE
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Service;
