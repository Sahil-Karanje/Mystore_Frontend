import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">

                {/* --- Left: Logo + About --- */}
                <div className="footer_section">
                    <h2 className="footer_logo">ShopEase</h2>
                    <p>
                        Your one-stop shop for the best deals on electronics, fashion,
                        and more. Quality products, fast delivery, and great prices.
                    </p>
                </div>

                {/* --- Quick Links --- */}
                <div className="footer_section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/offers">Offers</a></li>
                    </ul>
                </div>

                {/* --- Customer Service --- */}
                <div className="footer_section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/returns">Returns</a></li>
                        <li><a href="/shipping">Shipping</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>

                {/* --- Social Media --- */}
                <div className="footer_section">
                    <h3>Follow Us</h3>
                    <div className="social_icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* --- Bottom Copyright --- */}
            <div className="footer_bottom">
                <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer