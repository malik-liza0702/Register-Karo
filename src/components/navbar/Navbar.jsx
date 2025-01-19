import React from 'react'
import "./Navbar.css"
import { useState } from "react";
import logo from "../../assets/Group 1261153022.png";
function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <button
        className="toggle-button"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`nav-items ${isMenuOpen ? "show" : ""}`}>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Our Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </nav>
        <div className="header-right">
          {/* <a href="tel:+918447741883">+91 84477 41883</a> */}
          <button className="talk-button">Talk An Expert</button>
        </div>
      </div>
    </header>
  );
  
}

export default Navbar