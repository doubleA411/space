import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";


function Header() {
  const mobile = window.innerWidth <= 768 ? true :false;
  const [menuOpened,setMenuOpened] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" />
      </div>

      {(menuOpened === false && mobile === true) ? 
      (<div
      style={{backgroundColor:'var(--blue)', padding : '7px',borderRadius:'4px' , position : 'fixed',zIndex : '99', right : '2rem'}}
      onClick = { ()=> setMenuOpened(true)}
      >
        <img src={Bars} alt="" style={{width : '20px',height : '15px'}} />
      </div>  ):
      <div className="right-header">
      <ul className="ul-header">
         
          <li >
            <Link to = 'about' spy = {true} smooth = {true} onClick = { ()=> setMenuOpened(false)}>About</Link>
          </li>
        
        <li>
          <Link to = 'services' spy = {true} smooth = {true} onClick = { ()=> setMenuOpened(false)}>Services</Link>
        </li>
        <li ><Link to = 'team' spy = {true} smooth = {true} onClick = { ()=> setMenuOpened(false)}> 
          Portfolio
        </Link></li>
        <li ><Link to = 'contact' spy = {true} smooth = {true} onClick = { ()=> setMenuOpened(false)}> 
          Contact
        </Link></li>
      </ul>
    </div>
    }
      
    </div>
  );
}

export default Header;
