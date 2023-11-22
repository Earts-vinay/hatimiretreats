import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//vinay
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-transparent nav">
      <div className="container d-flex justify-content-end">
        <div className="logo">
          <img src="assets/hatimigold.svg" className="img-fluid h-25 w-25" alt="Hatimi Gold Logo" />
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <button className="btn btn-outline" type="submit">
            Login
          </button>
          </ul>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
