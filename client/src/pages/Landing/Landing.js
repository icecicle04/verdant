import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Register from "../components/Register";
import Login from "../components/LogInBtn"




function Landing(props) {
  return (
    <div className ="container-fluid">
      <div className="row">
        <div className ="col-md-12 text-center">
          <h1> Welcome to Verdant-Green Thumbs</h1>
                  <Register />
                  <Login />
        </div>
      </div>
      </div> 
      
  );
}


export default Landing;