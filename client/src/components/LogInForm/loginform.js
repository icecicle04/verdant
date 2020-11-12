import React, { Component, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./loginform.css";
import API from "../../utils/API";

const LoginForm = () => {
  const [jwt, setJwt] = useState("");
  const [formObject, setFormObject] = useState({});

  let history = useHistory();

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.email || !this.state.password) {
    //   alert("Please enter your email and password!");
    // }

    API.logInUser({
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res.data);
        setJwt(res.data.token)
        history.push("/account");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <div>
        <form className="loginform">
          <div>
            <input
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              id="loginEmail"
            />
          </div>
          <div>
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="loginBtn" onClick={handleFormSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
