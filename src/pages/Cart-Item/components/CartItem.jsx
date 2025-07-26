import { Button, Image } from "antd";



const CartItem = ({ item, onRemove }) => {
    if (!item) return null;
    const HandleRemove = (id) => {
        onRemove(id);
    }
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
                <Image
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                />
                <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <Button
                onClick={() => HandleRemove(item.id)}
                className="text-red-500 hover:text-red-700 transition"
            >
                Remove
            </Button>

        </div >
    );
}
export default CartItem;