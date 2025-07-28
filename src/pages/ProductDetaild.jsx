import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image, Rate } from "antd";
import { Button } from "antd/es/radio";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(
                    `https://687ecf16efe65e520087a4c2.mockapi.io/product/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.log("Error fetching product detail: ", error);
            }
        };

        fetchDetail();
    }, [id]);

    if (!product) return <div className="text-center py-20 text-gray-500">Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <div className="flex gap-10 flex-col md:flex-row">

                <div className="flex flex-col gap-4 w-50">
                    <Image src={product.avatar} />
                </div>


                <div className="flex gap-10 flex-col md:flex-row w-full">

                    <div className="w-full md:w-1/2">
                        <Image
                            src={product.avatar}
                            alt={product.name}
                            className="object-contain rounded"
                        />
                    </div>


                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

                        <div className="flex items-center gap-2 text-red-500 mb-1">
                            <Rate allowHalf defaultValue={2.5} />
                            <span className="text-sm text-gray-600">(122)</span>
                        </div>

                        <p className="text-2xl font-bold text-gray-900 mb-4">${product.price}</p>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {product.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
                        </p>

                        <div className="mb-4">
                            <p className="font-semibold mb-2">Select Size</p>
                            <div className="flex gap-3">
                                {["L", "XL", "XXL"].map((size) => (
                                    <Button
                                        key={size}
                                        className="px-4 py-2 border rounded hover:bg-gray-100"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Button className="!mt-6 !px-7 !py-5 !bg-black !text-white !rounded !hover:bg-gray-800 !flex !justify-center !items-center !text-base !font-medium">
                            ADD TO CART
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
