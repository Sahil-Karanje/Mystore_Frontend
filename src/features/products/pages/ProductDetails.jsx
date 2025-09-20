import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import offerImg from '../../../assets/Banner Images/offer.jpg'
import PaymentGateway from "../../PaymentGateway/pages/PaymentGateway";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [showPaymentGateway, setShowPaymentGateway] = useState(false);

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

    const handleWishlist = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post(
                `https://localhost:7007/api/wishlist/add/${id}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("✅ Product added to wishlist!");
            return res.data;
        } catch (err) {
            console.error("Wishlist error:", err.response || err.message);

            if (err.response?.status === 400) {
                toast.info("ℹ️ Product already in wishlist!");
            } else if (err.response?.status === 401) {
                toast.error("🔑 Please login to add items to wishlist.");
            } else {
                toast.error("❌ Failed to add product to wishlist.");
            }

            throw err.response?.data || "Error adding to wishlist";
        }
    };

    const handleAddToCart = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post(
                `https://localhost:7007/api/cart/add/${id}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("✅ Product added to cart!");
            return res.data;
        } catch (err) {
            console.error("Cart error:", err.response || err.message);

            if (err.response?.status === 400) {
                toast.info("ℹ️ Product already in cart!");
            } else if (err.response?.status === 401) {
                toast.error("🔑 Please login to add items to cart.");
            } else {
                toast.error("❌ Failed to add product to cart.");
            }

            throw err.response?.data || "Error adding to cart";
        }
    };

    return (
        <div className="productDetails_container">
            {/* LEFT SECTION */}
            <div className="productDetails_left">
                <div className="productDetails_header">
                    <img
                        src={"https://localhost:7007" + product.imageUrl}
                        alt={product.name}
                        className="productDetails_img"
                    />
                    <div className="productDetails_info">
                        <h1>{product.name}</h1>
                        <p>{product.shortDescription}</p>
                        <h2 className="price">₹{product.price}</h2>
                        <p className="category">Category: {product.category}</p>
                        <p className="stock">
                            {product.isActive ? "In Stock" : "Out of Stock"}
                        </p>
                        <div className="buttons">
                            <button className="btn addCart" onClick={handleAddToCart}>Add to Cart</button>
                            <button className="btn buyNow" onClick={() => setShowPaymentGateway(true)}>Buy Now</button>
                            <button className="btn wishlist" onClick={handleWishlist}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>

                <div className="productDetails_desc">
                    <h3>Product Details</h3>
                    
                    <p>Brand: {product.brand}</p>
                    <p>Availabe in Stock: {product.stock}</p>
                    
                    <h3 className="p_desc">Decription</h3>
                    <p>{product.longDescription}</p>
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

            <div className="productDetails_sidebar">
                <div className="sidebar_box">
                    <h3>Why Shop With Us?</h3>
                    <ul>
                        <li>🚚 Free & Fast Delivery</li>
                        <li>🔒 100% Secure Payments</li>
                        <li>💳 Cash on Delivery Available</li>
                        <li>↩️ Easy Returns Policy</li>
                    </ul>
                </div>

                <div className="sidebar_box">
                    <h3>Trending Now</h3>
                    {similarProducts.slice(0, 3).map(sp => (
                        <div key={sp.productId} className="sidebar_product">
                            <img src={"https://localhost:7007" + sp.imageUrl} alt={sp.name} />
                            <div>
                                <p>{sp.name}</p>
                                <span>₹{sp.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sidebar_banner">
                    <img src={offerImg} alt="Offer" />
                </div>
            </div>

            { showPaymentGateway && (<PaymentGateway product={product} onClose={() => setShowPaymentGateway(false)} />)}
        </div>
    );

};

export default ProductDetails;
