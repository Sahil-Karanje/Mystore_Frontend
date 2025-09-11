import { useState, useEffect } from "react";
import Profile from "../components/Profile/Profile";
import AddProduct from "../components/AddProduct/AddProduct";
import "./admin.css";
import WishList from "../components/wishlist/WishList";
import Address from "../components/Address/Address";
import YourOrders from "../components/Your Orders/YourOrders";
import { getProfile } from "../../auth/authApi";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getProfile();
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="account_container">
      <div className="sidemenu">
        <h2
          className={`sidemenu_item ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </h2>
        <div className="divider"></div>
        <h2
          className={`sidemenu_item ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wish List
        </h2>
        <div className="divider"></div>
        <h2
          className={`sidemenu_item ${activeTab === "address" ? "active" : ""}`}
          onClick={() => setActiveTab("address")}
        >
          Address
        </h2>
        <div className="divider"></div>
        <h2
          className={`sidemenu_item ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          Your Orders
        </h2>
        <div className="divider"></div>
        {user.isSeller && (
          <h2
            className={`sidemenu_item ${activeTab === "addProduct" ? "active" : ""
              }`}
            onClick={() => setActiveTab("addProduct")}
          >
            Add Product
          </h2>
        )}
      </div>

      <div className="main_content">
        {activeTab === "profile" && <Profile user={user} />}
        {activeTab === "wishlist" && <WishList />}
        {activeTab === "address" && <Address />}
        {activeTab === "orders" && <YourOrders />}
        {activeTab === "addProduct" && user.isSeller && <AddProduct />}
      </div>
    </div>
  );
};

export default Admin;
