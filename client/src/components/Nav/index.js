import React from "react";
import ReactLogo from "./logo1.svg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="/">
        <h1>Verdant</h1>
        <img src={ReactLogo} alt="Verdant Logo" />
        <img href="./logo1.svg" alt="Verdant Logo"></img>
      </a>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">
            Home Page
          </a>
          <a className="dropdown-item" href="/">
            Login
          </a>
          <a className="dropdown-item" href="/Register">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
