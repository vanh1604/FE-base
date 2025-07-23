import React, { useState, useEffect } from "react";
import FashionBanner from "../components/FashionBanner";
import BestSeller from "../components/BestSeller";
import Service from "../components/Service";
import axios from "axios";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    axios
      .get("https://687ecf16efe65e520087a4c2.mockapi.io/product")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
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
          {filteredProducts.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="border p-2 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center bg-white"
              style={{ minHeight: 340, maxWidth: 250 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover mb-4 rounded"
                style={{ maxWidth: 200, minHeight: 192, objectFit: "cover" }}
              />
              <h3
                className="text-lg font-semibold text-center mb-2"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: "3em",
                  maxHeight: "3em",
                }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
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
