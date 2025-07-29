import React, { useState, useEffect } from "react";
import FashionBanner from "./components/FashionBanner";
import BestSeller from "./components/BestSeller";
import Service from "./components/Service";
import axios from "axios";
import { Image } from "antd";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://687ecf16efe65e520087a4c2.mockapi.io/product");
        console.log("Fetched data:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-app py-8">
        <FashionBanner />
      </div>

      <div className="flex items-center justify-center my-8">
        <span className="hidden sm:block flex-1 border-t border-gray-400 mr-4"></span>
        <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
          LATEST
          <span className="font-bold text-gray-700 ml-1">COLLECTION</span>
          <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
        </h2>
        <span className="hidden sm:block flex-1 border-t border-gray-400 ml-4"></span>
      </div>

      <p className="text-center text-base text-gray-600 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non, beatae, ipsam fugiat ut aliquam doloribus laudantium ducimus voluptates doloremque qui nulla, facilis quia velit ipsum minus omnis laborum quasi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-18">
        {filteredProducts.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="border p-20 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center bg-white min-h-[240px] max-w-[450px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded max-w-[200px] min-h-[192px]"
            />
            <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2 min-h-[3em] max-h-[3em]">
              {item.title}
            </h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 py-8">
        <BestSeller />
        <Service />
      </div>
    </div>
  );

};

export default Home;
