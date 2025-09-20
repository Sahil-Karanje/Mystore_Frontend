import { useState, useEffect } from "react";
import axios from "axios";
import './PaymentGateway.css'

const API_URL = "https://localhost:7007/api/auth";

const PaymentGateway = ({ product, onClose }) => {
    const [address, setAddress] = useState(null);
    const [editing, setEditing] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await axios.get(`${API_URL}/address`, {
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

    const handleBuy = async () => {
        try {
            const res = await axios.post(
                `https://localhost:7007/api/yourorder/add/${product.productId}`,
                {},
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
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>✖</button>

                <h2 className="modal-title">Order Summary</h2>

                <div className="product-details">
                    <img
                        src={"https://localhost:7007" + product.imageUrl}
                        alt={product.name}
                        className="product-img"
                    />
                    <div>
                        <h3>{product.name}</h3>
                        <p className="short-desc">{product.shortDescription}</p>
                        <p className="price">
                            ₹{product.discountPrice ?? product.price}{" "}
                            {product.discountPrice && (
                                <span className="old-price">₹{product.price}</span>
                            )}
                        </p>
                    </div>
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
                    <button
                        className="edit-btn"
                        onClick={() => setEditing(!editing)}
                    >
                        {editing ? "Save Address" : "Edit Address"}
                    </button>
                </div>

                <div className="modal-actions">
                    <button className="btn buy" onClick={handleBuy}>Buy</button>
                    <button className="btn cancel" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway