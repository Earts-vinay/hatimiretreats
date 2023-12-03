import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = `navbar navbar-expand-lg${isScrolled ? ' bg-blur' : ' bg-transparent'}  fixed-top`;

  return (
    <nav className={navClass}>
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
          <ul className="navbar-nav gap-3 text-uppercase">
            {/* Your NavLink items */}
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
              <NavLink className="nav-link list" to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/events" activeClassName="active-link">
               Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/daypass" activeClassName="active-link">
               Daypass
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list" to="/faqs" activeClassName="active-link">
               Faq's
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
            <li className="nav-item align-items-center d-flex ">
              <FaRegUserCircle className='fs-3 text-white'/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
