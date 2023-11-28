import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent nav">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand">
          <img src="assets/hatimigold.svg" className="img-fluid h-25 w-25" alt="Hatimi Gold Logo" />
        </div>

        {/* Navbar Toggler */}
        <button
          className={`navbar-toggler${isNavOpen ? ' open' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end${isNavOpen ? ' show' : ''}`}>
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink className="nav-link list" exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/destinations" activeClassName="active-link">
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/location" activeClassName="active-link">
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/blogs" activeClassName="active-link">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/contact" activeClassName="active-link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <button className=" btn btn-outline-login " type="submit">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
