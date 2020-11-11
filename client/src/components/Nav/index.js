import React from "react";
import { Component } from "react";
import { menuItems } from "./menuItems";
import "./Navbar.css";
import { Button } from "./Button";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems navbar navbar-expand-lg ">
        <h1 className="navbar-logo">
          Verdant &nbsp;<i class="fas fa-leaf"></i>
        </h1>
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
// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <a className="navbar-brand" href="/">
//         <h1>Verdant</h1>
//         <img src={ReactLogo} alt="Verdant Logo" />
//         <img href="./logo.svg" alt="Verdant Logo"></img>
//       </a>
//       <div className="btn-group">
//         <button
//           type="button"
//           className="btn btn-danger dropdown-toggle dropdown-toggle-split"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Toggle Dropdown</span>
//         </button>
//         <div className="dropdown-menu">
//           <a className="dropdown-item" href="/">
//             Home Page
//           </a>
//           <div className="btn-group">
//             <button
//               type="button"
//               className="btn btn-danger dropdown-toggle dropdown-toggle-split"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Toggle Dropdown</span>
//             </button>
//             <div className="dropdown-menu">
//               <a className="dropdown-item" href="/">
//                 Home Page
//               </a>
//               <a className="dropdown-item" href="/Login">
//                 Login
//               </a>
//               <a className="dropdown-item" href="/Register">
//                 Sign Up
//               </a>
//               <a className="dropdown-item" href="/plant">
//                 Plants
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
export default Navbar;
