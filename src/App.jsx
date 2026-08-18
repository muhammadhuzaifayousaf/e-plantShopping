import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./pages/CartItem";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>

        <p className="tagline">
          Bring nature home with beautiful, healthy and carefully selected
          houseplants.
        </p>

        <AboutUs />

        <a href="/plants" className="get-started-btn">
          Get Started
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
        path="/cart"
        element={<CartItem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;