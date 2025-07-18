import React from "react";
import "./Hero.css";
import { assets } from "../../assets";
const Hero = () => {
  return (
    <div className="hero container" id="=hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          our cutting-edge is designed to empower students with the
          knowledge,skils,and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore More <img src={assets.darkArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
