import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useCart } from "../context/CartContext";

const allItems = [
  {
    id: 1,
    name: "Veg Burger",
    image: "/icons/Veg-Burger.svg",
    price: 99,
    category: "Burgers",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image: "/icons/Cheese-Pizza.svg",
    price: 199,
    category: "Pizzas",
  },
  {
    id: 3,
    name: "Sprite",
    image: "/icons/Sprite.svg",
    price: 49,
    category: "Drinks",
  },
  {
    id: 4,
    name: "Paneer Burger",
    image: "/icons/Paneer-Burger.svg",
    price: 129,
    category: "Burgers",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    image: "/icons/Margherita.svg",
    price: 159,
    category: "Pizzas",
  },
  {
    id: 6,
    name: "Cold Coffee",
    image: "/icons/Cold-Coffee.svg",
    price: 79,
    category: "Drinks",
  },
  {
    id: 7,
    name: "French Fries",
    image: "/icons/French-Fries.svg",
    price: 69,
    category: "Snacks",
  },
  {
    id: 8,
    name: "Veg Momos",
    image: "/icons/Veg-Momos.svg",
    price: 89,
    category: "Snacks",
  },
  {
    id: 9,
    name: "Masala Dosa",
    image: "/icons/Masala-Dosa.svg",
    price: 109,
    category: "South Indian",
  },
  {
    id: 10,
    name: "Chole Bhature",
    image: "/icons/Chole-Bhature.svg",
    price: 119,
    category: "North Indian",
  },
  {
    id: 11,
    name: "Pav Bhaji",
    image: "/icons/Pav-Bhaji.svg",
    price: 99,
    category: "Snacks",
  },
  {
    id: 12,
    name: "Chicken Roll",
    image: "/icons/Chicken-Roll.svg",
    price: 139,
    category: "Rolls",
  },
  {
    id: 13,
    name: "Tandoori Paneer",
    image: "/icons/Pav-Bhaji.svg",
    price: 149,
    category: "Starters",
  },
  {
    id: 14,
    name: "Ice Cream",
    image: "/icons/Ice-Cream.svg",
    price: 59,
    category: "Desserts",
  },
  {
    id: 15,
    name: "Chocolate Shake",
    image: "/icons/Chocolate-Shake.svg",
    price: 99,
    category: "Drinks",
  },
];

const categories = [
  "All",
  "Burgers",
  "Pizzas",
  "Drinks",
  "Snacks",
  "South Indian",
  "North Indian",
  "Rolls",
  "Starters",
  "Desserts",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* 🧾 Heading */}
      <h2 className="text-3xl font-extrabold mt-6 text-red-600 text-center">
        🍽️ Explore Our Menu
      </h2>

      {/* 🧃 Category Filters */}
      <section className="overflow-x-auto pb-2">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border-2 transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-red-500 text-white border-red-500 shadow"
                  : "bg-white text-gray-700 hover:bg-red-100 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 🧆 Food Items Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAdd={addToCart} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No items found for selected category.
          </p>
        )}
      </section>
    </div>
  );
};

export default Menu;
