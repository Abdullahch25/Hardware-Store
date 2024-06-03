import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar bg-gradient-to-t from-slate-200 to-neutral-500">
        <div className="menu">
          <Link to="/home" className="menu-item">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <Link to="/about" className="menu-item">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </Link>
          <Link to="/contact" className="menu-item">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </Link>
          <Link to="/products" className="menu-item">
            <i className="fas fa-shopping-bag"></i>
            <span>Products</span>
          </Link>
          <Link to="/admin" className="menu-item">
            <i className="fas fa-lock"></i>
            <span>Admin</span>
          </Link>
        </div>
      </div>
      <div className="content bg-gradient-to-r from-stone-400 to-stone-500">
        <div className="header">
          <h1>Welcome to Your Dashboard</h1>
          <button className="btn">Logout</button>
        </div>
        <div className="main">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-cart-plus"></i>
              <span>Added new product</span>
            </div>
            <div className="activity-item">
              <i className="fas fa-chart-line"></i>
              <span>Increased sales by 20%</span>
            </div>
            <div className="activity-item">
              <i className="fas fa-comments"></i>
              <span>New message from customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
