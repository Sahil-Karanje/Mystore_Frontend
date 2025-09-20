import { useState, useEffect } from "react";
import axios from "axios";
import "../PaymentGateway.css"; 

const API_URL = "https://localhost:7007/api";
const CartPaymentGateway = ({ cartItems, onClose }) => {
  const [address, setAddress] = useState(null);
  const [editing, setEditing] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/address`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          const addr = response.data;
          const formatted = `${addr.street}, ${addr.city}, ${addr.state} - ${addr.zip}, ${addr.country}`;
          setAddress(formatted);
        }
      } catch (err) {
        console.error("Error fetching address", err);
      }
    };

    fetchAddress();
  }, []);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.product.discountPrice ?? item.product.price),
    0
  );

  const handleBuy = async () => {
    try {
      const productIds = cartItems.map((item) => item.productId);

      await axios.post(
        `${API_URL}/yourorder/add-multiple`,
        { productIds },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Order placed successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="modal-overlay-cart">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2 className="modal-title">Cart Order Summary</h2>

        <div className="cart-products-list">
          {cartItems.map((item) => (
            <div className="product-details" key={item.cartID}>
              <img
                src={"https://localhost:7007"+item.product.imageUrl}
                alt={item.product.name}
                className="product-img"
              />
              <div>
                <h3>{item.product.name}</h3>
                <p className="short-desc">{item.product.shortDescription}</p>
                <p className="price">
                  ₹{item.product.discountPrice ?? item.product.price}{" "}
                  {item.product.discountPrice && (
                    <span className="old-price">₹{item.product.price}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="address-section">
          <h3>Delivery Address</h3>
          {editing ? (
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <p className="address">{address}</p>
          )}
          <button className="edit-btn" onClick={() => setEditing(!editing)}>
            {editing ? "Save Address" : "Edit Address"}
          </button>
        </div>

        <div className="total-box">
          <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
        </div>

        <div className="modal-actions">
          <button className="btn buy" onClick={handleBuy}>
            Buy 
          </button>
          <button className="btn cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPaymentGateway;
