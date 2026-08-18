import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
// import { useState } from "react";
import plants from "../data/plants";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

//   const [addedProducts, setAddedProducts] = useState([]);

//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
  dispatch(addToCart(plant));
};

const isAdded = (plantId) => {
  return cartItems.some((item) => item.id === plantId);
};

  return (
    <div className="product-page">
      <Navbar />

      <main className="product-container">
        <div className="product-header">
          <div>
            <h1>Our Houseplants</h1>
            <p>
              Discover beautiful plants for every corner of your home.
            </p>
          </div>

          <Link to="/cart" className="view-cart-btn">
            View Cart
          </Link>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="plant-category"
              key={category}
            >
              <h2>{category}</h2>

              <div className="plant-grid">
                {categoryPlants.map((plant) => (
                  <div
                    className="plant-card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="plant-description">
                        {plant.description}
                      </p>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded(plant.id)}
                      >
                        {isAdded(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;