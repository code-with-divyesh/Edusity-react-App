import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/index";

const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <img src={assets.logo} alt="logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
