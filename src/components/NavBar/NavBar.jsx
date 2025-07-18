import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/index";
import { Link } from "react-scroll";

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
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              <button className="btn">Contact us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
