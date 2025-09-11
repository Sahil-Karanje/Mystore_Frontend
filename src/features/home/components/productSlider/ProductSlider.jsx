import React from "react";
import "./ProductSlider.css";
import { useNavigate } from "react-router-dom";

const ProductSlider = ({ title, products }) => {
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-slider">
      <h3 className="slider-title">{title}</h3>
      <div className="slider-wrapper">
        {products.map((product) => (
          <div
            key={product.id}
            className="slider-item"
            onClick={() => goToProduct(product.id)}
          >
            <img
              src={product.imageUrl}
              alt=""
              className="slider-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
