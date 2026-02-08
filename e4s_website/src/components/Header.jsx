import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import "../style/components/header.scss";
import { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const Header = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1f1f1f") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div
        className="header"
        style={{
          height: navSize,
          backgroundColor: navColor,
          transition: "all 3s",
        }}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <div className="right_side">
          <div className="nav_lan">
            <button
              className="menu_mobile"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <VscClose className="icon" />
              ) : (
                <VscMenu className="icon" />
              )}
            </button>

            <nav>
              <ul>
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/about"> About</Link>
                </li>
                <li>
                  <Link to="/services"> Services</Link>
                </li>
                <li>
                  <Link to="/projects"> Projects</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact</Link>
                </li>
              </ul>
            </nav>

            <button className="language">
              <select className="language" name="" id="">
                <option value="">EN</option>
                <option value="">AZ</option>
              </select>
            </button>
          </div>
  
          <div
            className="nav_mobile"
            style={{ visibility: menuOpen ? "visible" : "hidden" }}
          >
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/services"> Services</Link>
              </li>
              <li>
                <Link to="/projects"> Projects</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
    
          
        </div>
      </div>
    </header>
  );
};

export default Header;
