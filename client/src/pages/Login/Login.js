import React from "react";
import LogInForm from "../../components/LogInForm/loginform";
import "./Login.css";

function Login(props) {
  return (
    <div className="container-fluid">
      <div className ="row">
        <div className ="col-md-12 text-center">
          <h2> Log Into an Existing Account</h2>
          <LogInForm />
        </div>
      </div>
      </div>       
  );
}

export default Login;