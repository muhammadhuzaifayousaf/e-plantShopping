import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-container">
        <div className="cart-header">
          <div>
            <h1>Shopping Cart</h1>

            <p>
              Total Plants: <strong>{totalItems}</strong>
            </p>
          </div>

          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <p>
              Add some beautiful plants to your shopping cart.
            </p>

            <Link to="/plants" className="continue-shopping-btn">
              Browse Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">
                      <h2>{item.name}</h2>

                      <p>
                        Unit Price:{" "}
                        <strong>
                          ${item.price.toFixed(2)}
                        </strong>
                      </p>

                      <p>
                        Quantity:{" "}
                        <strong>{item.quantity}</strong>
                      </p>

                      <p className="item-total">
                        Total:{" "}
                        <strong>
                          ${itemTotal.toFixed(2)}
                        </strong>
                      </p>
                    </div>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleDecrease(item.id)
                        }
                        disabled={item.quantity === 1}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          handleIncrease(item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(item.id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>

              <div className="summary-row">
                <span>Total Plants</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row total-row">
                <span>Total Cost</span>
                <strong>
                  ${totalCost.toFixed(2)}
                </strong>
              </div>

              <div className="cart-actions">
                <Link
                  to="/plants"
                  className="continue-shopping-btn"
                >
                  Continue Shopping
                </Link>

                <button
                  className="checkout-btn"
                  onClick={() =>
                    alert("Coming Soon!")
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;