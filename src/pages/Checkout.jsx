import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const { cartItems, total, clearCart } = useCart(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("❗ Please fill in all delivery details.");
      return;
    }

    alert("✅ Order placed successfully!");
    console.log("Order Details:", form, cartItems);

    // Clear cart after placing order
    clearCart();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* 📝 Delivery Form */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Info</h2>
        <form className="bg-white rounded-xl p-6 shadow-md">
          <InputField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          />
        </form>
      </div>

      {/* 📦 Order Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2 text-gray-700"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">₹{item.price * item.quantity}</p>
                </div>
              ))}

              <div className="text-right font-semibold text-lg pt-2">
                Total: ₹{total}
              </div>

              <Button className="w-full mt-4" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
