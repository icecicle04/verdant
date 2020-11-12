import React from "react";
import Form from "../../components/Form/index";
import "./Register.css";

function Register(props) {
  return (
    <div className="container-fluid text-center">
      <div className ="row text-center">
        <div className ="col-md-12 text-center">
          <h1> Register a New Account</h1>
          <Form />
        </div>
      </div>
      </div>       
  );
}

export default Register;