import React from "react";
import { Redirect } from "react-router-dom";


//Create function to redirect user to sign-up page

function handleSignUpBtn(event) {
    event.preventDefault();
    console.log("Clicking here will take you to the sign-up page")
  }

//Create an onClick event listener for the sign-in btn
function SignUp() {
    return (   
        <button className="btn btn-success" onClick={handleSignUpBtn} >
        Sign Up
      </button>
    );
  }
   
  export default SignUp;