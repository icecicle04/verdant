import React from "react";
import LogInForm from "../components/Form/loginform";

function Login(props) {
  return (
    <div className="container fluid">
      <div className ="row">
        <div className ="col-md-12">
          <h1> Log into an existing account</h1>
          <LogInForm />
        </div>
      </div>
      </div>       
  );
}

export default Login;