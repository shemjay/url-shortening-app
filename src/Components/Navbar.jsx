import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Assets/Images/logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className={`nav__menu ${isOpen ? "active" : ""}`}>
          <ul className="nav__links">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a
                href="https://cors-anywhere.herokuapp.com/corsdemo"
                target="blank"
                rel="noopener noreferrer"
              >
                Cors
              </a>
            </li>
          </ul>
          <hr className="nav__menu-underline"></hr>
          <div className="nav__buttons">
            <button className="nav__buttons nav__login">Login</button>
            <Button text="Sign Up" />
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
