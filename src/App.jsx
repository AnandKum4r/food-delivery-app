import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-red-500 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="p-4 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
