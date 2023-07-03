import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({onLogout}) => {
  function handleLogout (){
    fetch("/logout", {
      method: "DELETE",
    }).then(()=> onLogout());
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Flygo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="booking">
                  Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="reviews">
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
