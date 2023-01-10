import React from "react";
import "./Hero.css";
import hero from "../../assets/hero-image.png";
import pattern from "../../assets/pattern.png";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero">
      <div className="section1">
        <div className="left-hero">
          <div className="circle">
            <p>Brand, Design & Development</p>
          </div>
        </div>
        <div className="right-hero">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="pattern">
        <img src={pattern} alt="" />
        <Link to="about" spy={true} smooth={true}>
          <p>Get to know us</p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
