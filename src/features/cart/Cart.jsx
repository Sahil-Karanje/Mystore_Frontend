import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";
import CartPaymentGateway from "../PaymentGateway/pages/CartPaymentGateway/CartPaymentGateway";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartPaymentGateway, setShowCartPaymentGateway] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("https://localhost:7007/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartItems(res.data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [token]);

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`https://localhost:7007/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCartItems((prev) => prev.filter((item) => item.productId !== productId));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.product.discountPrice || item.product.price),
    0
  );

  const goToProduct = (id) => {
        navigate(`/product/${id}`);
    };

  return (
    <div className="cart-container">
      {showCartPaymentGateway && (
        <CartPaymentGateway
          cartItems={cartItems}
          onClose={() => setShowCartPaymentGateway(false)}
        />
      )}
      <h1 className="cart-heading">Your Cart</h1>

      <div className="summary-card">
        <div className="total-amount">Total: ₹{totalAmount.toLocaleString()}</div>
        <button className="pay-button" onClick={() => setShowCartPaymentGateway(true)}>Proceed to Pay</button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-card" key={item.cartID} onClick={() => goToProduct(item.productId)}>
              <img
                src={"https://localhost:7007" + item.product.imageUrl}
                alt={item.product.name}
                className="cart-image"
              />
              <div className="cart-details">
                <h2 className="product-name">{item.product.name}</h2>
                <p className="product-short">{item.product.shortDescription}</p>
                <p className="product-meta">
                  Brand: {item.product.brand} | Category: {item.product.category}
                </p>
                <div className="price-box">
                  <span className="discount-price">
                    ₹{item.product.discountPrice}
                  </span>
                  {item.product.discountPrice !== item.product.price && (
                    <span className="original-price">₹{item.product.price}</span>
                  )}
                </div>
              </div>


              <button
                className="remove-button"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      

    </div>
  );
};

export default Cart;
