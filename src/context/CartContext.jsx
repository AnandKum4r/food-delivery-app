// This file sets up a global Cart context using React's Context API.
// It allows the cart state (items, total, and functions) to be accessed and updated from any component in the app.

// ✅ createContext: Creates a context for the cart
// ✅ useCart: A custom hook to access the cart context easily
// ✅ CartProvider: Provides the cart state and functions to all child components

// State managed:
// - cartItems: array of items in the cart
// - total: total price of items

// Functions provided:
// - addToCart: Adds a new item or increases quantity if already in cart
// - removeFromCart: Removes item from cart by ID
// - increaseQty: Increases quantity of a specific item
// - decreaseQty: Decreases quantity (and removes item if quantity is 0)
// - clearCart: Empties the entire cart

// The provider wraps around the app (or required component tree), so any component can access the cart using useCart()

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
