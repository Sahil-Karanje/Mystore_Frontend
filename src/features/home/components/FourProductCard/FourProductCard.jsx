import React from 'react'
import './FPC.css'
import { useNavigate } from 'react-router-dom';

const FourProductCard = ({ title, products, linkText }) => {
    const navigate = useNavigate();

    const goToProduct = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="category_card">
            <h3>{title}</h3>
            <div className="category_products">
                {products.map((product, index) => (
                    <div key={product.productId} className="product_item" onClick={() => goToProduct(product.productId)}>
                        <img src={"https://localhost:7007" + product.imageUrl} alt={product.name} />
                        <p className="product_name">{product.name}</p>
                        {product.price && <p className="product_price">Starting ₹{product.price}</p>}
                    </div>
                ))}
            </div>
            <a href="#">{linkText}</a>
        </div>
    )
}

export default FourProductCard