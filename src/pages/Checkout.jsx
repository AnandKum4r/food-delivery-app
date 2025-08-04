import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { useState } from "react";

const Checkout = () => {
  const { cartItems, total } = useCart();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all the details.");
      return;
    }

    // 🧾 Simulate order placed
    alert(`Order placed successfully! 🍕\nThank you, ${form.name}`);
    setForm({ name: "", address: "", phone: "" });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-red-600">Checkout</h2>

      {/* Delivery Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 p-6 rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-red-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-red-500"
            placeholder="Enter your delivery address"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-red-500"
            placeholder="e.g., 9876543210"
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Place Order
        </Button>
      </form>

      {/* Order Summary */}
      <div className="bg-white/90 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2 text-gray-700"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-4 text-lg font-semibold text-right">Total: ₹{total}</p>
      </div>
    </div>
  );
};

export default Checkout;
