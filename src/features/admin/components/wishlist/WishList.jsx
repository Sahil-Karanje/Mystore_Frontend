import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WishList.css";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("https://localhost:7007/api/wishlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWishlist(res.data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };

    fetchWishlist();
  }, [token]);

  const removeFromWishlist = async (productId) => {
    try {
      await axios.delete(`https://localhost:7007/api/wishlist/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setWishlist((prev) => prev.filter((item) => item.productId !== productId));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No items in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.wishListID} className="wishlist-card">
              <img
                src={item.product?.imageUrl}
                alt={item.product?.name}
                className="wishlist-img"
              />
              <h3>{item.product?.name}</h3>
              <p>₹{item.product?.price}</p>
              <button
                className="wishlist-btn"
                onClick={() => removeFromWishlist(item.productId)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
