import React from "react";
import { Component } from "react";
import { menuItems } from "./menuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems navbar navbar-expand-lg fixed-top">
        <div className="navbar-logo"><strong>
          Verdant&nbsp;</strong><i class="fas fa-leaf"></i>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="loginButton">{/* <Button>Login</Button> */}</div>
      </nav>
    );
  }
}
export default Navbar;