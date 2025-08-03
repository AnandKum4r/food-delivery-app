import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-red-500 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="p-4 bg-gray-50 min-h-screen">
          <AppRoutes />
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
