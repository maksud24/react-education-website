import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="fixed-top container-fluid navbar-bg p-0">
        <nav className="navbar navbar-expand-lg navbar-dark text-center">
          <div className="container p-0">
            <NavLink
              className="navbar-brand p-0 d-flex align-items-center"
              to="/"
            >
              <img
                src="https://i.ibb.co/VV7KnQv/graduate.png"
                alt="Navbar-Brand"
              />
              <h1 className="m-0 ps-2 title">Education Pack</h1>
            </NavLink>
            <button
              className="navbar-toggler px-2 py-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="link-active"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/courses"
                  activeClassName="link-active"
                >
                  Courses
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="link-active"
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/contact"
                  activeClassName="link-active"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
