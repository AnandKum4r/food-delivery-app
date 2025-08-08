import { useCart } from "../context/CartContext";

const FoodCard = ({ item }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

  const inCart = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center space-y-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 mx-auto object-contain"
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-red-500 font-bold">₹{item.price}</p>

      {inCart ? (
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <span className="font-medium">{inCart.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(item)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default FoodCard;
