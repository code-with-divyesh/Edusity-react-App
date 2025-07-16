import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/index";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div>
      <nav className={`container ${sticky ? "dark-nav" : ""} `}>
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
