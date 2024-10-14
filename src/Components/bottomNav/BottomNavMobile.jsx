import React from "react";
import "./bottomNavMobile.css";

const BottomNavMobile = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <span>Home</span>
      </div>
      <div className="nav-item">
        <span>About</span>
      </div>
      <div className="nav-item">
        <span>Projects</span>
      </div>
      <div className="nav-item">
        <span>Awards</span>
      </div>
      <div className="nav-item">
        <span>Contact</span>
      </div>
    </div>
  );
};

export default BottomNavMobile;
