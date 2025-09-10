import React, { useState } from 'react';
import './addProduct.css';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LongDescription: "",
    ShortDescription: "",
    Price: "",
    DiscountPrice: "",
    Stock: "",
    Brand: "",
    Category: "",
    ImageUrl: "",
    IsActive: true,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("https://localhost:7007/api/product/addNewProduct", formData);
      setMessage("✅ Product added successfully!");
      setShowPopup(true);
      setFormData({
        Name: "",
        LongDescription: "",
        ShortDescription: "",
        Price: "",
        DiscountPrice: "",
        Stock: "",
        Brand: "",
        Category: "",
        ImageUrl: "",
        IsActive: true,
      });
    } catch (err) {
      setError("❌ Failed to add product. " + (err.response?.data || err.message));
      setShowPopup(true);
    }
  };

  return (
    <>
      <form className="addProduct_form" onSubmit={handleSubmit}>
        <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required maxLength={150} />

        <textarea name="LongDescription" placeholder="Long Description" value={formData.LongDescription} onChange={handleChange} maxLength={500}></textarea>

        <input type="text" name="ShortDescription" placeholder="Short Description" value={formData.ShortDescription} onChange={handleChange} maxLength={250} />

        <input type="number" step="0.01" name="Price" placeholder="Price" value={formData.Price} onChange={handleChange} required />

        <input type="number" step="0.01" name="DiscountPrice" placeholder="Discount Price" value={formData.DiscountPrice} onChange={handleChange} />

        <input type="number" name="Stock" placeholder="Stock" value={formData.Stock} onChange={handleChange} required />

        <input type="text" name="Brand" placeholder="Brand" value={formData.Brand} onChange={handleChange} maxLength={100} />

        <input type="text" name="Category" placeholder="Category" value={formData.Category} onChange={handleChange} maxLength={100} />

        <input type="text" name="ImageUrl" placeholder="Image URL" value={formData.ImageUrl} onChange={handleChange} maxLength={255} />

        <label>
          <input type="checkbox" name="IsActive" checked={formData.IsActive} onChange={handleChange} />
          Active
        </label>

        <button type="submit">Add Product</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup_content">
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
