import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {

    const [keyword, setKeyword] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!keyword.trim()) return;

        try {
            const res = await axios.get(`http://localhost:8080/api/search?query=${keyword}`);
            console.log("Search results:", res.data);
        } catch (err) {
            console.error("Search failed:", err);
        }

        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Left - Logo */}
            <div className="navbar_logo" onClick={() => (window.location.href = "/")}>
                MyStore
            </div>

            {/* Center - Search (hidden on mobile) */}
            <form className="navbar_search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* Right - Icons / Hamburger */}
            <div className="navbar_right">
                <div className="navbar_icons">
                    <FaShoppingCart
                        className="icon"
                        onClick={() => (window.location.href = "/cart")}
                    />
                    <FaUser
                        className="icon"
                        onClick={() => (window.location.href = "/account")}
                    />
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile_menu">
                    <form className="mobile_search" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button type="submit">Go</button>
                    </form>
                    <div className="mobile_icons">
                        <FaShoppingCart
                            className="icon"
                            onClick={() => (window.location.href = "/cart")}
                        />
                        <FaUser
                            className="icon"
                            onClick={() => (window.location.href = "/account")}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar