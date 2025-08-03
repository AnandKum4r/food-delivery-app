const Footer = () => {
  return (
    <footer className="bg-[#1c1c1e] text-gray-300 py-6 mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-red-500">🍽️ FoodRush</h2>
          <p className="text-sm mt-2">Tasty food delivered to your door.</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-6">
          <a href="/" className="hover:text-red-400 transition">
            Home
          </a>
          <a href="/menu" className="hover:text-red-400 transition">
            Menu
          </a>
          <a href="/cart" className="hover:text-red-400 transition">
            Cart
          </a>
          <a
            href="https://github.com/AnandKum4r"
            className="hover:text-red-400 transition"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/anandkum4r/"
            className="hover:text-red-400 transition"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Anand Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
