import React, { useState } from 'react';
import Profile from '../components/Profile/Profile';
import AddProduct from '../components/AddProduct/AddProduct';
import './admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className='admin_container'>
      {/* Sidebar */}
      <div className="sidemenu">
        <h2
          className={`sidemenu_item ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </h2>
        <div className="divider"></div>
        <h2
          className={`sidemenu_item ${activeTab === "addProduct" ? "active" : ""}`}
          onClick={() => setActiveTab("addProduct")}
        >
          Add Product
        </h2>
      </div>

      {/* Main Content */}
      <div className="main_content">
        {activeTab === "profile" && <Profile />}
        {activeTab === "addProduct" && <AddProduct />}
      </div>
    </div>
  );
};

export default Admin;
