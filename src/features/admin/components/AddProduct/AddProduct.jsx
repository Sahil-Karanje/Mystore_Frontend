import React, { useState } from "react";
import axios from "axios";
import './addproduct.css'

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
    IsActive: true,
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (imageFile) {
        data.append("imageFile", imageFile);
      }

      const res = await axios.post(
        "https://localhost:7007/api/product/addNewProduct",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("✅ Product added successfully!");
      console.log(res.data);
    } catch (err) {
      alert("❌ Failed to add product: " + (err.response?.data || err.message));
    }
  };

  return (
    <form className="addProduct_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        className="form_input"
      />

      <textarea
        name="LongDescription"
        placeholder="Long Description"
        value={formData.LongDescription}
        onChange={handleChange}
        className="form_textarea"
      ></textarea>

      <input
        type="text"
        name="ShortDescription"
        placeholder="Short Description"
        value={formData.ShortDescription}
        onChange={handleChange}
        className="form_input"
      />

      <input
        type="number"
        step="0.01"
        name="Price"
        placeholder="Price"
        value={formData.Price}
        onChange={handleChange}
        required
        className="form_input"
      />

      <input
        type="number"
        step="0.01"
        name="DiscountPrice"
        placeholder="Discount Price"
        value={formData.DiscountPrice}
        onChange={handleChange}
        className="form_input"
      />

      <input
        type="number"
        name="Stock"
        placeholder="Stock"
        value={formData.Stock}
        onChange={handleChange}
        required
        className="form_input"
      />

      <input
        type="text"
        name="Brand"
        placeholder="Brand"
        value={formData.Brand}
        onChange={handleChange}
        className="form_input"
      />

      <input
        type="text"
        name="Category"
        placeholder="Category"
        value={formData.Category}
        onChange={handleChange}
        className="form_input"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="form_file"
      />

      <label className="form_checkbox">
        <input
          type="checkbox"
          name="IsActive"
          checked={formData.IsActive}
          onChange={handleChange}
          className="checkbox_input"
        />
        Active
      </label>

      <button type="submit" className="form_button">
        Add Product
      </button>
    </form>

  );
};

export default AddProduct;
