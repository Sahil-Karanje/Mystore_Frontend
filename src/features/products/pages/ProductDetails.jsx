import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import ProductSlider from "../../home/components/productSlider/ProductSlider";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`https://localhost:7007/api/product/${id}`);
            setProduct(res.data);
            
            const resSimilar = await axios.get(`https://localhost:7007/api/product/category/${res.data.category}`);
            console.log(resSimilar.data)
            setSimilarProducts(resSimilar.data);
        };
        fetchProduct();
    }, [id]);

     

    if (!product) return <div>Loading...</div>;

    return (
        <div className="productDetails_container">
            <div className="productDetails_header">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="productDetails_img"
                />
                <div className="productDetails_info">
                    <h1>{product.name}</h1>
                    <h2 className="price">₹{product.price}</h2>
                    <p className="category">Category: {product.category}</p>
                    <p className="stock">
                        {product.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                    <div className="buttons">
                        <button className="btn addCart">Add to Cart</button>
                        <button className="btn buyNow">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="productDetails_desc">
                <h3>Product Details</h3>
                <p>Description: {product.longDescription}</p>
                <p>Brand: {product.brand}</p>
                <p>Stock: {product.stock}</p>
            </div>

            <div className="productDetails_slider">
                <h3>Similar Products</h3>
                {similarProducts.length > 0 && (
                    <ProductSlider title="You might also like" products={similarProducts} />
                )}
            </div>

            <div className="productDetails_reviews">
                <h3>Customer Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((rev, idx) => (
                        <div key={idx} className="review_card">
                            <h4>{rev.userName}</h4>
                            <p>{rev.comment}</p>
                            <span>Rating: ⭐ {rev.rating}</span>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
