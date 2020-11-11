import React from "react";
import LogInForm from "../../components/LogInForm/loginform";

function Login(props) {
  return (
    <div className="container fluid">
      <div className ="row">
        <div className ="col-md-12 text-center">
          <h1> Log Into an Existing Account</h1>
          <LogInForm />
        </div>
      </div>
      </div>       
  );
}

export default Login;