import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import axios from "axios";

const BestSeller = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://687ecf16efe65e520087a4c2.mockapi.io/product");
        const allProducts = res.data;


        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);

        setRandomProducts(selected);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-10">

      <div className="flex flex-col items-center justify-center my-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
          BEST<span className="font-bold text-gray-700 ml-1">SELLER</span>
          <span className="inline-block w-16 h-[2px] bg-gray-700 ml-3 align-middle"></span>
        </h2>

      </div>


      <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda iste laboriosam architecto
        numquam odio minus rem unde omnis deleniti fuga dolorum, accusamus ipsum! Quod suscipit ducimus
        eveniet voluptatem ipsa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {randomProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
