import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars,FaSkullCrossbones } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsHeaderActive(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navOpenBtn = document.querySelector("[data-menu-open-btn]");
    const navCloseBtn = document.querySelector("[data-menu-close-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");

    const handleNavButtonClick = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("active");
    };

    navOpenBtn.addEventListener("click", handleNavButtonClick);
    navCloseBtn.addEventListener("click", handleNavButtonClick);

    return () => {
      navOpenBtn.removeEventListener("click", handleNavButtonClick);
      navCloseBtn.removeEventListener("click", handleNavButtonClick);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <div className="overlay"></div>
        <Link to="/" className="logo">
          <img width={"100px"} src="/logo.png" alt="pplus logo" />
        </Link>
        <div className="header-actions">
          
        
          <button className="btn btn-primary">Sign in</button>
        </div>
        <button
          className={`menu-open-btn ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          data-menu-open-btn
        >
          <FaBars />
        </button>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          
          <div className="navbar-top">
          <Link to="/" className="logo">
            <img width={"100px"} src="/logo.png" alt="Pplus logo" />
            </Link>
            <button
              className="menu-close-btn"
              onClick={handleMenuToggle}
              data-menu-close-btn
            >
              <FaSkullCrossbones />
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              {/* <a href="./index.html" className="navbar-link">
                All
              </a> */}
            </li>
           
          </ul>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
