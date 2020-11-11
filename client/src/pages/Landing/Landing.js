import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Register from "../../components/Register";
import Login from "../../components/LogInBtn";
import "./Landing.css";



function Landing(props) {
  return (
    <div className ="container-fluid">
      <div className="row">
        <div className ="col-md-12 text-center">
          <h1><strong>Verdant</strong></h1>
                  <Register />
                  <Login />
        </div>
      </div>
      </div> 
      
  );
}


export default Landing;