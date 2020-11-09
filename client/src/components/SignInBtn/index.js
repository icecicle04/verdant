import React from "react";


//Create function to redirect user to sign-in page
function handleSignInBtn(event) {
    event.preventDefault();
    console.log("Clicking here will take you to the sign-in page")
  }


//Create an onClick event listener for the sign-in btn
function SignUp() {
    return (   
        <button className="btn btn-danger" onClick={handleSignInBtn} >
        Sign Up
      </button>
    );
  }
   
  export default SignUp;