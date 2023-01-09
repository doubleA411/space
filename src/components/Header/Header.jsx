import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" />
      </div>
      <div className="right-header">
        <ul>
          <li>Pricing</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
