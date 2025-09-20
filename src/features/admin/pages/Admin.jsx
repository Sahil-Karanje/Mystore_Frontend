import { useState, useEffect } from "react";
import Profile from "../components/Profile/Profile";
import AddProduct from "../components/AddProduct/AddProduct";
import "./admin.css";
import WishList from "../components/wishlist/WishList";
import Address from "../components/Address/Address";
import YourOrders from "../components/Your Orders/YourOrders";
import { getProfile } from "../../auth/authApi";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  const handleBecomeSeller = () => {
    if (!user.isSeller)
      navigate("/becomeSeller")
  }

  return (
    <>
      <div className="becomeSellerBanner">
        <h1 onClick={handleBecomeSeller}>{user.isSeller ? "Seller Admin" : "Become a Seller"}</h1>
      </div>
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
          {activeTab === "addProduct" && user.isSeller && <AddProduct user={user} />}
        </div>
      </div>
    </>
  );
};

export default Admin;
