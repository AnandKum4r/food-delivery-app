# 🍔 FoodRush - Food Delivery App

🔗 **Live Demo:** https://food-delivery-app-xi-one.vercel.app/

---

## 📌 Introduction

**FoodRush** is a responsive food delivery web app built using **React + Vite** and **Tailwind CSS**. The app is designed to simulate a smooth online ordering experience for a restaurant brand. Users can browse menus, add items to a cart, and proceed to checkout — all in a clean, mobile-first interface.

---

## ⚙️ Features

- 🏠 **Home Page:** Promotions banner, category filter, and featured items.
- 📋 **Menu Page:** View all food items with filtering by category.
- ➕ **Add to Cart:** Add items with quantity control.
- 🛒 **Cart Page:** View selected items, update quantities, remove items.
- 💳 **Checkout Page:** Bonus page for placing order (no payment logic).
- 🔁 **Reusable Components:** Modular design for scalability and maintenance.

---

## 🛠 Technologies Used

- ⚛️ React.js
- 💨 Tailwind CSS
- 🧭 React Router
- 💾 useContext (Cart State Management)
- ⚡ Vite (Fast dev server & bundler)

---

## 🗂️ Pages Overview

| Page       | Description                                  |
|------------|----------------------------------------------|
| `/`        | Home page with banner and featured food      |
| `/menu`    | All food items with category filters         |
| `/cart`    | Cart items with quantity adjustment          |

---

## 📁 Project Structure

```
src/
├── components/        # UI Components (Navbar, Footer, Button, FoodCard)
├── context/           # Cart Context with state logic
├── pages/             # Page views (Home, Menu, Cart, Checkout)
├── assets/            # Icons/images
├── App.jsx            # Root component
└── main.jsx           # Entry point
```

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnandKum4r/Food-Delivery-App.git
   cd FoodRush
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Visit in your browser:**
   [http://localhost:5173](http://localhost:5173)

---

## 🙌 Credits

Built with ❤️ by Anand Kumar — React Developer.
