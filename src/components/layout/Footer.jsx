import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold text-blue-500">ForeverShop</h2>
          <p className="mt-2 text-sm text-gray-300">
            ForeverShop là nền tảng mua sắm trực tuyến đáng tin cậy, mang đến sản phẩm chất lượng cao và dịch vụ tận tâm.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-2">Danh mục</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-blue-400">Trang chủ</a></li>
            <li><a href="/products" className="hover:text-blue-400">Sản phẩm</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Địa chỉ: 123 Đường ABC, Hà Nội</li>
            <li>Điện thoại: 0123 456 789</li>
            <li>Email: support@forevershop.vn</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © 2025 ForeverShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
