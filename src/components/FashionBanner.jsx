import { Button, Image } from "antd";
import React from "react";

const FashionBanner = () => {
  return (
    <div className="w-full bg-white shadow-xl my-8 overflow-hidden">
      <div className="flex flex-col md:flex-row h-[600px]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start px-14 py-10">
          <div className="mb-4 text-gray-500 font-medium flex items-center gap-2">
            <span className="w-12 h-[2px] bg-gray-400 mr-2"></span>
            OUR BESTSELLERS
          </div>
          <h1 className="text-6xl font-serif font-semibold leading-tight mb-6">
            Latest Arrivals
          </h1>
          <Button className="mt-4 px-8 py-4 bg-black text-white rounded-full font-bold text-lg shadow hover:bg-gray-800 transition">
            SHOP NOW
          </Button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 bg-pink-100 flex items-center justify-center">
          <Image
            src="https://forever-frontend-pink.vercel.app/assets/hero_img-DOCOb6wn.png"
            alt="Fashion Model"
            className="object-contain h-full w-full max-w-[600px]"
            style={{ maxHeight: 600 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
