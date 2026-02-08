import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import "../style/components/footer.scss";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_top" data-aos="zoom-in">
            <div className="logo_nav">
              <Link to="/" className="logo">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
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
            </div>

            <div className="social_bar">
              <ul>
                <li>
                  <Link
                    to="https://www.facebook.com/evidence4solutions/"
                    target="_blank"
                  >
                    <GrFacebookOption />
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.instagram.com/evidence4solutions/"
                    target="_blank"
                  >
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/86638019/admin/"
                    target="_blank"
                  >
                    <ImLinkedin2 />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/evidence4solutions/"
                    target="_blank"
                  >
                    <AiFillYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_bottom">
            <p>Copyright ©2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
