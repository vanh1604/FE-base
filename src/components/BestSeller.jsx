import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const respone = await axios.get("https://687ecf16efe65e520087a4c2.mockapi.io/product")
          .then((res) => {
            const updatedProducts = res.data.map((item) => ({
              ...item,
              rating: item.rating || { rate: Math.random() * 5 },
            }));
            console.log("Fetched and updated data:", updatedProducts);
            setProducts(updatedProducts);
          })
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
          BEST
          <span className="font-bold text-gray-700 ml-1">SELLER</span>
        </h2>
        <span className="flex-1 border-t border-gray-400 ml-4 max-w-[100px]"></span>
      </div>
      <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda
        iste laboriosam architecto numquam odio minus rem unde omnis deleniti
        fuga dolorum, accusamus ipsum! Quod suscipit ducimus eveniet voluptatem
        ipsa.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((item) => item.rating && item.rating.rate >= 4.5)
          .slice(0, 4)
          .map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
