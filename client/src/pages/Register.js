import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import SignUp from "../components/SignUpBtn";
// import Nav from "../components/Nav"
// import SignIn from "../components/SignInBtn"

import Form from "../../src/components/Form";
function Register(props) {
  return (
    <div className="container fluid">
      <div className ="row">
        <div className ="col-md-12">
          <h1> Register an account</h1>
          <Form />
        </div>
      </div>
      </div>       
  );
}

export default Register;