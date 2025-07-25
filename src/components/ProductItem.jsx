import { Image } from "antd";
import React from "react";

const ProductItem = ({ item }) => {
    if (!item) return null;

    return (
        <div
            className="border p-2 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center bg-white"
        >
            <Image
                src={item.image}
                alt={item.title}
                className="object-cover mb-4 rounded w-full! h-50!"

            />
            <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2">
                {item.title}
            </h3>
            <p className="text-gray-600">${item.price}</p>
            <button
                className="w-full bg-black text-white py-2 rounded mt-2 hover:bg-gray-800 transition-colors"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductItem;
