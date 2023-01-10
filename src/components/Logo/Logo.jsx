import React from 'react'
import hero from "../../assets/logo-text.png";
import './Logo.css'

function Logo() {
  return (
    <div className='logo-text'>
      <img src={hero} />
    </div>
  );
}

export default Logo