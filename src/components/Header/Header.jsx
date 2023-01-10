import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" />
      </div>
      <div className="right-header">
        <ul>
          <Link to = 'about' spy = {true} smooth = {true}> 
            <li>Pricing</li>
          </Link>
          <Link to = 'services' spy = {true} smooth = {true}> 
            <li>Services</li> 
          </Link>
          <Link to = 'team' spy = {true} smooth = {true}> 
            <li>Portfolio</li> 
          </Link>
          <Link to = '#' spy = {true} smooth = {true}> 
            <li>Contact</li> 
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
