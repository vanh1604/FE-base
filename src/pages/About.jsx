import { Image } from "antd";
import {
  CheckCircleOutlined,
  RocketOutlined,
  LockOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const About = () => {
  const features = [
    {
      icon: <CheckCircleOutlined className="text-3xl text-blue-500" />,
      title: "Quality Products",
      desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
      icon: <RocketOutlined className="text-3xl text-green-500" />,
      title: "Fast & Free Shipping",
      desc: "Enjoy fast and free delivery on all orders with no hidden charges.",
    },
    {
      icon: <LockOutlined className="text-3xl text-purple-500" />,
      title: "Secure Payments",
      desc: "Your payment information is encrypted and processed securely.",
    },
    {
      icon: <CustomerServiceOutlined className="text-3xl text-red-500" />,
      title: "Customer Support",
      desc: "Our support team is always ready to assist you with your inquiries.",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="mt-8 text-center text-4xl font-semibold tracking-wide text-gray-800">
        ABOUT US
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center my-8 gap-6">
        <div className="w-full lg:w-1/2">
          <Image
            className="rounded-xl w-full max-w-xl h-auto object-contain mx-auto"
            src="https://forever-frontend-pink.vercel.app/assets/about_img-BAJyTXw9.png"
          />
        </div>
        <div className="text-center text-lg text-gray-600 max-w-3xl mx-auto space-y-4 px-4">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p>
            <strong>Our Mission:</strong> At Forever, our mission is to empower
            customers with choice, convenience, and confidence. We're dedicated
            to providing a seamless shopping experience that exceeds
            expectations—from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
