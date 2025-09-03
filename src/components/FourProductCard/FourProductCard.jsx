import React from 'react'
import './FPC.css'

const FourProductCard = ({ title, products, linkText }) => {
    return (
        <div className="category_card">
            <h3>{title}</h3>
            <div className="category_products">
                {products.map((product, index) => (
                    <div key={index} className="product_item">
                        <img src={product.image} alt={product.name} />
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