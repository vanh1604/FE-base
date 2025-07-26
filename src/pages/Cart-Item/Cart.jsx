import { Button } from "antd";
import CartItem from "../Cart-Item/components/CartItem";

const Cart = () => {
    return (
        <div className="py-8 px-app">
            <div className="mt-8 text-4xl font-semibold tracking-wide text-gray-800 ml-24">
                YOUR CART
                <span className="inline-block w-16 h-0.5 bg-gray-700 ml-3 align-middle"></span>
            </div>

            <div className="flex flex-col items-center justify-center my-8">
                <p className="text-lg text-gray-600">Your cart is currently empty.</p>
            </div>

            <div className="ml-24 text-lg text-gray-600 mb-4">
                Please add items to your cart.
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <CartItem />
                </div>

                <div className="w-full ">
                    <div className="ml-230 p-8 sticky w-100">
                        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                            CART TOTAL
                        </h2>
                        <div className="border-t border-gray-200 mb-4"></div>

                        <div className="space-y-4 text-gray-700">
                            <p className="flex justify-between border-b pb-2">
                                <span>Subtotal:</span> <span>$0.00</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span>Shipping Fee:</span> <span>$10.00</span>
                            </p>
                            <p className="flex justify-between font-bold text-lg pb-2">
                                <span>Total:</span> <span>$0.00</span>
                            </p>
                        </div>

                        <Button
                            className=" !bg-black !text-white !py-3 !mt-6 !rounded hover:!bg-gray-800 transition-colors duration-200 ml-35"
                            size="large"
                        >
                            PROCEED TO CHECKOUT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;