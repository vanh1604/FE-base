import { Button, Input } from "antd";
import React from "react";
import {
  CheckCircleIcon,
  LockClosedIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const Service = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          {/* 1 - Easy Exchange */}
          <div className="flex flex-col items-center text-center flex-1">
            <ArrowPathIcon className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1">Easy Exchange Policy</h3>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* 2 - 7 Days Return */}
          <div className="flex flex-col items-center text-center flex-1">
            <CheckCircleIcon className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1">7 Days Return Policy</h3>
            <p className="text-gray-400">
              We provide 7 days free return policy
            </p>
          </div>

          {/* 3 - Best Support */}
          <div className="flex flex-col items-center text-center flex-1">
            <LockClosedIcon className="w-14 h-14 text-black mb-4" />
            <h3 className="font-bold text-lg mb-1">Best customer support</h3>
            <p className="text-gray-400">We provide 24/7 customer support</p>
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
          <form className="flex max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-l-md focus:outline-none text-lg"
            />
            <Button
              type="submit"
              className="bg-black! text-white! px-6! py-4! rounded-r-md! hover:bg-gray-800! transition duration-300!"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Service;
