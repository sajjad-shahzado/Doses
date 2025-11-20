import React, { useEffect,useState } from "react";
import logok from "../Assets/logoR.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"

import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "white", height: "auto"}}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#top">
          <img
              className="logoo"
              data-aos="slide-down"
              data-aos-delay="100"
              src={logok}
              alt="Logo"
              style={{
                width: "130px",
                height: "auto",
                maxHeight: "115px",
              }}
            />
          </a>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span
              className={
                isNavCollapsed ? "navbar-toggler-icon" : "btn-close"
              }
              aria-hidden="true"
            ></span>
          </button>

          {/* Navbar Links */}
          <div
           className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
            id="navbarNav"
            
          >
            <ul className="navbar-nav ms-auto">
              <li className="items">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#updates"
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                 OUR UPDATES
                </a>
              </li>
              <li className="items">
                <a
                  className="nav-link"
                  href="#Aboutus"
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                  ABOUT US
                </a>
              </li>
              <li className="items">
                <a
                  className="nav-link"
                  href="#form"
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                  {/* TESTIMONIAL */}
                  JOIN US
                </a>
              </li>
              <li className="items">
                <a
                  className="nav-link"
                  href="#Services"
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                  SERVICES
                </a>
              </li>
              {/* <li className="items">
                <a
                  className="nav-link"
                  href="#Projects"
                 
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                  OUR BRANCHES
                </a>
              </li> */}
              <li className="items">
                <a
                  className="nav-link"
                  href="#Contactus"
                  style={{ fontSize: 20, color: "#000000", padding: "30px" }}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
