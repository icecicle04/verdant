import React, { Component, useContext, useState } from "react";
import AlertContext from "../../context/AlertContext";
import { useHistory } from "react-router-dom";
import "./loginform.css";
import API from "../../utils/API";

const LoginForm = () => {
  const [jwt, setJwt] = useState("");
  const [formObject, setFormObject] = useState({});
  const { setAlert } = useContext(AlertContext);

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
        setAlert({message: `Welcome back ${res.data.user.firstName} !`, type: "success"})
        console.log(res.data.user.id)
        let userId = res.data.user.id;
        // setJwt("");
        setJwt(res.data.data);
        history.push(`/api/account/` + userId);
      })
      .catch((err) => {
        setAlert({message: "Failed to log you in.", type: "danger"})
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
