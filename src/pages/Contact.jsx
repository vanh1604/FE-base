import { Image, Button } from 'antd';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-10">
      <h2 className="text-4xl font-serif font-bold text-center mb-10 flex items-center justify-center gap-2">
        <span>Contact Us</span>
        <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
        {/* Hình ảnh */}
        <div className="w-[400px] h-[400px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="https://forever-frontend-pink.vercel.app/assets/contact_img-CyOum2vk.png"
            className="w-full h-full object-cover"
            preview={false}
          />
        </div>

        {/* Thông tin */}
        <div className="max-w-md text-left">
          <p className="text-xl font-semibold mb-2">Our Store</p>
          <p className="text-base text-gray-700 mb-1">54709 Willms Station</p>
          <p className="text-base text-gray-700 mb-4">Suite 350, Washington, USA</p>

          <p className="text-base text-gray-700 mb-1">Tel: (415) 555-0132</p>
          <p className="text-base text-gray-700 mb-4">Email: admin@forever.com</p>

          <p className="font-semibold mb-2">Careers at Forever</p>
          <p className="text-base text-gray-700 mb-4">
            Learn more about our teams and job openings.
          </p>

          <Button type="default" className="border-black px-6 py-1">
            Explore Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
