import React, { useState, useEffect } from "react";
import axios from "axios";
import "./address.css";

const API_URL = "https://localhost:7007/api/auth"; 

const Address = () => {
  const [address, setAddress] = useState(null); 
  const [formData, setFormData] = useState({
    Street: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`${API_URL}/address`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data) {
          setAddress(response.data);
        }
      } catch (err) {
        console.error("Error fetching address", err);
      }
    };

    fetchAddress();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/address`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setAddress(response.data); 
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving address", err);
    }
  };

  return (
    <div className="address_container">
      <h2>My Address</h2>

      {address && !isEditing ? (
        <div className="address_card">
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zip}</p>
          <p>{address.country}</p>
          <button onClick={() => {
            setFormData(address);
            setIsEditing(true);
          }}>
            Edit Address
          </button>
        </div>
      ) : (
        <form className="address_form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <button type="submit">{isEditing ? "Update" : "Save"}</button>
        </form>
      )}
    </div>
  );
};

export default Address;
