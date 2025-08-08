import { Form, Input, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";

const Checkout = () => {
  return (
    <div className="py-8 px-app">
      <div className="mt-10 flex items-center">
        <h2 className="text-3xl font-bold">
          <span className="text-gray-500 uppercase">Delivery</span>
          <span className="text-black uppercase">Information</span>
        </h2>
        <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
      </div>
      <Form
        layout="vertical"
        className="mt-8 max-w-2xl mx-auto"
        initialValues={{ remember: true }}
      />
      <div className="flex gap-5 mt-10 ">
        <Form.Item
          name="Firstname"
          className="text-sm w-50"
          rules={[{ required: true, message: "Please input your Firstname!" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="Lastname"
          className="text-sm w-50"
          rules={[{ required: true, message: "Please input your Lastname" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="Email"
          className="text-sm w-105"
          rules={[
            { required: true, message: "Please input your Email Address!" },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="Address"
          className="text-sm w-105"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <Input placeholder="Address" />
        </Form.Item>
      </div>
      <div className="flex gap-5 mt-10">
        <Form.Item
          name="City"
          className="text-sm w-50"
          rules={[{ required: true, message: "Please input your Phone City!" }]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="State"
          className="text-sm w-50"
          rules={[{ required: true, message: "Please input your State!" }]}
        >
          <Input placeholder="State" />
        </Form.Item>
      </div>
      <div className="flex gap-5">
        <Form.Item
          name="Zipcode"
          className="text-sm w-50"
          rules={[
            { required: true, message: "Please input your Zipcode!" },
            { pattern: /^[0-9]{8,15}$/, message: "Zipcode is not valid!" },
          ]}
        >
          <InputNumber
            min={1}
            max={100}
            placeholder="Zipcode"
            className="!w-50"
          />
        </Form.Item>

        <Form.Item
          name="Country"
          className="text-sm w-50"
          rules={[{ required: true, message: "Please input your Country!" }]}
        >
          <Input placeholder="Country" />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="PhoneNumber"
          className="text-sm w-105"
          rules={[
            { required: true, message: "Please input your phone number" },
          ]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
      </div>
    </div>
  );
};

export default Checkout;
