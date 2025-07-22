import { Image } from "antd";
import React from "react";
const ProductItem = ({ item }) => {
    if (!item) return null;

    return (
        <div
            className="border p-2 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center bg-white"
            style={{ minHeight: 340, maxWidth: 250, justifyContent: "space-between" }}
        >
            <Image
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
            <button
                className="w-full bg-black text-white py-1 rounded mt-2 hover:bg-gray-800 transition-colors"
                style={{ marginTop: "auto" }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductItem;
