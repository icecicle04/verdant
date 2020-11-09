import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SignUp from "../components/SignUpBtn";
import Nav from "../components/Nav"
import SignIn from "../components/SignInBtn"




function Landing(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Nav />
          <h1> Welcome to Verdant-Green Thumbs</h1>
                  <SignUp />
                  <SignIn />
                  
        </Col>
      </Row>
      </Container> 
      
  );
}


export default Landing;
