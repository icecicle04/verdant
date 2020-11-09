import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import SignUp from "../components/SignUpBtn";
import SignIn from "../components/SignInBtn"




function Landing(props) {
  return (
    <div className ="container-fluid">
      <div className="row">
        <div className ="col-md-12 text-center">
          <h1> Welcome to Verdant-Green Thumbs</h1>
                  <SignUp />
                  <SignIn />                  
        </div>
      </div>
      </div> 
      
  );
}


export default Landing;
