import React from "react";
import Form from "../../components/Form";
import "./Register.css";

function Register(props) {
  return (
    <div className="container-fluid" id="registerContainer">
      <div className ="row">
        <div className ="col-md-12 text-center">
          <h2 id="registerHeader"> Register a New Account</h2>
          <Form />
        </div>
      </div>
      </div>       
  );
}

export default Register;