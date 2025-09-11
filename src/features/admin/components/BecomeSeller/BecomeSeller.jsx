import React, { useState } from "react";
import axios from "axios";
import "./BecomeSeller.css";
import { useNavigate } from "react-router-dom";

const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Canada",
    "Australia",
    "Japan",
    "China",
    "Brazil",
];

const BecomeSeller = () => {
    const [sellerName, setSellerName] = useState("");
    const [sellerLocation, setSellerLocation] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                "https://localhost:7007/api/auth/become-seller",
                {
                    sellerName,
                    sellerLocation,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            navigate("/account");
            setMessage(response.data.message);
        } catch (error) {
            setMessage(
                error.response?.data || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="become-seller-container">
            <h2>Become a Seller</h2>
            <form onSubmit={handleSubmit} className="become-seller-form">
                <div className="form-group">
                    <label>Seller Name:</label>
                    <input
                        type="text"
                        value={sellerName}
                        onChange={(e) => setSellerName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Seller Location (Country):</label>
                    <select
                        value={sellerLocation}
                        onChange={(e) => setSellerLocation(e.target.value)}
                        required
                    >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    Proceed
                </button>
            </form>

            {message && <p className="response-message">{message}</p>}
        </div>
    );
};

export default BecomeSeller;
