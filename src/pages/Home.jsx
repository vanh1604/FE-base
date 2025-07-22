import React, { useState, useEffect } from "react";
import { Image } from "antd";
import FashionBanner from "../components/FashionBanner";
import { products } from "../data/data";
import BestSeller from "../components/BestSeller";
import Service from "../components/Service";
import ProductItem from "../components/ProductItem";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-5 py-8">
        <FashionBanner />
      </div>
      <div className="flex items-center justify-center my-8">
        <span className="hidden sm:block flex-1 border-t border-gray-400 mr-4"></span>
        <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
          LATEST
          <span className="font-bold text-gray-700 ml-1">COLLECTION</span>
          <span className="flex-1 border-t border-gray-400 ml-4 max-w-[100px]"></span>
        </h2>
        <span className="hidden sm:block flex-1 border-t border-gray-400 ml-4"></span>
      </div>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non,
        beatae, ipsam fugiat ut aliquam doloribus laudantium ducimus voluptates
        doloremque qui nulla, facilis quia velit ipsum minus omnis laborum
        quasi.
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-18">
          {filteredProducts.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          <BestSeller />
          <Service />
        </div>
      </div>
    </div>
  );
};

export default Home;
