import { Image } from "antd";
import { Button } from "antd/es/radio";

const ProductItem = ({ item }) => {
    if (!item) return null;

    return (
        <div className="group relative p-4 border rounded-lg shadow hover:shadow-lg">
            <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-500">${item.price}</p>

            <Button
                className="!w-full !py-2 !px-4 !mt-2 !text-white !bg-black !text-center
                !mb-1 !text-sm !font-semibold 
             !hover:bg-gray-800 !hover:scale-105 
             transition-all !duration-300 !shadow-sm 
             !active:scale-100"
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductItem;
