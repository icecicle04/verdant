import React from "react";
import { Col, Row, Container } from "../components/Grid";
// import SignUp from "../components/SignUpBtn";
import Nav from "../components/Nav"
// import SignIn from "../components/SignInBtn"

import Form from "../components/Form"

function Register(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Nav />
          <h1> Register an account</h1>
          <Form />
        </Col>
      </Row>
      </Container> 
      
  );
}


export default Register;