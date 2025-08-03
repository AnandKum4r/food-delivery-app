import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md px-6 py-4 sticky top-0 z-50 rounded-b-xl border-b border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-red-600 tracking-tight"
        >
          🍽️ FoodRush
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-gray-800 font-semibold text-lg">
          <Link
            to="/"
            className="relative group transition-all duration-300 hover:text-red-600"
          >
            Home
            <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all bg-red-600 duration-300"></span>
          </Link>

          <Link
            to="/menu"
            className="relative group transition-all duration-300 hover:text-red-600"
          >
            Menu
            <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all bg-red-600 duration-300"></span>
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-red-600 transition duration-200"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 animate-bounce text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
