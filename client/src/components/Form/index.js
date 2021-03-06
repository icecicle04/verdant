import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/AlertContext";
import userContext from "../../context/userContext";
import API from "../../utils/API";
import "./Form.css";

const Form = () => {
  const [formObject, setFormObject] = useState({});
  const { setAlert } = useContext(AlertContext);
  const { setJwt } = useContext(userContext);

  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      !formObject.firstName ||
      !formObject.lastName ||
      !formObject.email ||
      !formObject.password
    ) {
      alert("Please fill out all fields to sign up");
      return;
    } else {
      API.createUser({
        first_name: formObject.firstName,
        last_name: formObject.lastName,
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => {
          if (res.data.result === "complete") {
            setAlert({
              message: `Successfully signed up! Welcome to Verdant, ${res.data.firstName}`,
              type: "success",
            });
            // when the user is signed up and the data is retrieved,
            // send the infromation into the login route to automatically sign in
            API.logInUser({
              email: formObject.email,
              password: formObject.password,
            }).then((res) => {
              let userId = res.data.user.id;
              setJwt(res.data.data);
              history.push(`/api/account/` + userId);
            });
          }
        })
        .catch((err) => {
          if (err) {
            console.log("Something went wrong");
            setAlert({ message: "Failed to sign you up.", type: "danger" });
          }
        });
    }
  };
  return (
    <div>
      <div>
        <form className="form text-center" id="registerForm">
          <div className="registerInput">
            <input
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="registerInput">
            <input
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="registerInput">
            <input
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="registerInput">
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <button id="registerBtn" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
