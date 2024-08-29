import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <h1 className='top-center '>AI Doc</h1>
        </a>
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

        {/* Navbar links and centered text */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="nav nav-tabs ">
            <li className="nav-item ">
              <a className="nav-link text-light" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light " href="#">Documents</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
