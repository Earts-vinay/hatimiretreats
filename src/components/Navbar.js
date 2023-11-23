import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent nav">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand">
          <img src="assets/hatimigold.svg" className="img-fluid h-25 w-25" alt="Hatimi Gold Logo" />
        </div>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink className="nav-link list" exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/destination" activeClassName="active-link">
                Destination
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
