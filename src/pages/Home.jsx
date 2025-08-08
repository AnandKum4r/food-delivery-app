import { useState } from "react";
import FoodCard from "../components/FoodCard";
import Button from "../components/Button";
import { useCart } from "../context/CartContext"; // 

// 🧾 Define categories
const categories = ["All", "Burgers", "Pizzas", "Drinks", "Snacks", "Desserts"];

// 🍔 Popular items with category for filtering
const featuredItems = [
  {
    id: 1,
    name: "Cheese Burger",
    image: "/icons/Paneer-Burger.svg",
    price: 129,
    category: "Burgers",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "/icons/Cheese-Pizza.svg",
    price: 249,
    category: "Pizzas",
  },
  {
    id: 3,
    name: "Cold Coffee",
    image: "/icons/Cold-Coffee.svg",
    price: 89,
    category: "Drinks",
  },
  {
    id: 4,
    name: "French Fries",
    image: "/icons/French-Fries.svg",
    price: 59,
    category: "Snacks",
  },
  {
    id: 5,
    name: "Ice Cream",
    image: "/icons/Ice-Cream.svg",
    price: 59,
    category: "Desserts",
  },
  {
    id: 6,
    name: "Veg Momos",
    image: "/icons/Veg-Momos.svg",
    price: 89,
    category: "Snacks",
  },
];

const Home = () => {
  const { addToCart } = useCart(); // ✅ Cart function
  // const {Button} = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filter based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? featuredItems
      : featuredItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="space-y-6">
        {/* 🎯 Banner Section */}
        <section className="bg-red-500 text-white rounded-xl px-8 py-10 text-center shadow-md">
          <h1 className="text-4xl font-bold mb-2">
            Delicious Food Delivered Fast 🚀
          </h1>
          <p className="text-lg mb-4">Get 20% OFF on your first order today!</p>
          <Button className="bg-red-400 text-white hover:text-white hover:bg-red-600 font-semibold">
            Order Now
          </Button>
        </section>

        {/* 🍽️ Categories */}
        <section>
          <h2 className="text-3xl font-extrabold text-red-600 mb-4">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition font-medium
              ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* 🌟 Featured Items */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Popular Items
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} onAdd={addToCart} />
              
            ))}
            
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
