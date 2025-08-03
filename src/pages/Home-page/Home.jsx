import React, { useState, useEffect } from "react";
import FashionBanner from "./components/FashionBanner";
import BestSeller from "./components/BestSeller";
import Service from "./components/Service";
import axios from "axios";
import { Image } from "antd";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://687ecf16efe65e520087a4c2.mockapi.io/product"
        );
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
    <div className="bg-white">
      <FashionBanner />

      <section className="max-w-405 mx-auto px-app py-16">
        <div className="flex items-center justify-center mb-10">
          <span className="hidden sm:block flex-1 border-t border-gray-400 mr-4"></span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
            LATEST
            <span className="font-bold text-gray-700 ml-1">COLLECTION</span>
            <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
          </h2>
          <span className="hidden sm:block flex-1 border-t border-gray-400 ml-4"></span>
        </div>

        <p className="text-center text-base text-gray-600 max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non,
          beatae, ipsam fugiat ut aliquam doloribus laudantium ducimus
          voluptates doloremque qui nulla, facilis quia velit ipsum minus omnis
          laborum quasi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filteredProducts.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={item.avatar}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  preview={false}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-410 mx-auto px-app py-16">
        <BestSeller />
        <Service />
      </section>
    </div>
  );
};

export default Home;
