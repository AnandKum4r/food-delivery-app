import Button from "../components/Button";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-red-600 tracking-tight">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-2xl">🛒 Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-red-500 font-bold">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm ml-4 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* 💰 Total & Checkout */}
          <div className="text-right mt-4">
            <p className="text-lg font-semibold mb-2">
              Total: ₹<span>{total}</span>
            </p>
            <Button className="w-full sm:w-auto">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
