import { Menu, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 pt-14 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Cột logo + mô tả */}
        <div>
          <h1 className="text-3xl font-bold text-black">
            FOREVER
            <span className="text-pink-400 ml-1">.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's standard dummy text ever since the <br />
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>


        <div className="space-y-4 gap-4 ml-60">
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <Menu className="!space-y-2 !text-sm !text-red-200">
            <li><Link href="/" className="hover:underline !text-gray-700">HOME</Link></li>
            <li><Link href="/about" className="hover:underline !text-gray-700">ABOUT US</Link></li>
            <li><Link href="/delivery" className="hover:underline !text-gray-700">DELIVERY</Link></li>
            <li><Link href="/privacy" className="hover:underline !text-gray-700">PRIVACY POLICY</Link></li>
          </Menu>
        </div>

        <div className="space-y-5 ml-60">
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a
                href="tel:+84123456789"
                className="hover:underline text-blue-600 text-gray-700"
              >
                +84 123 456 789
              </a>
            </li>
            <li>
              <a
                href="mailto:leh19923@gmail.com"
                className="hover:underline text-gray-700"
              >
                leh19923@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-4 text-right text-sm text-gray-600 max-w-7xl mx-auto">
        Copy right 2024© forever.com – All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
