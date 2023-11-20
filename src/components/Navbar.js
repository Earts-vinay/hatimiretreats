import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0 text-white">
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
            </ul>
          </div>
          <div className="logo d-flex justify-content-center">
            <img src="assets/hatimigold.svg" className="img-fluid h-25 w-25" alt="image" />
          </div>
          <div className="d-flex gap-5">
            <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
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
            </ul>
            <button className="btn btn-outline" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
