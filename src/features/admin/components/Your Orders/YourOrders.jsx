import { useState, useEffect } from 'react'
import axios from "axios";
import "../wishlist/WishList.css";

const YourOrders = () => {
  const [orderlist, setOrderlist] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrderlist = async () => {
      try {
        const res = await axios.get("https://localhost:7007/api/yourorder", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrderlist(res.data);
      } catch (err) {
        console.error("Error fetching Orderlist:", err);
      }
    };
    fetchOrderlist();
  }, [token]);

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Order list</h2>
      {orderlist.length === 0 ? (
        <p className="wishlist-empty">No items in your orders.</p>
      ) : (
        <div className="wishlist-grid">
          {orderlist.map((item) => (
            <div key={item.yourOrderID} className="wishlist-card">
              <img
                src={item.product?.imageUrl}
                alt={item.product?.name}
                className="wishlist-img"
              />
              <h3>{item.product?.name}</h3>
              <p>₹{item.product?.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default YourOrders