import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/AlertContext";
import userContext from "../../context/userContext";
import API from "../../utils/API";
import "./Form.css";

const Form = () => {
  const [formObject, setFormObject] = useState({});
  const { setAlert } = useContext(AlertContext);
  const {setJwt} = useContext(userContext);

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
          console.log(res.data);
          if (res.data.result === "complete") {
            setAlert({
              message: `Successfully signed up! Welcome to Verdant, ${res.data.firstName}`,
              type: "success",
            });
            setJwt(res.data.data);
            // history.push("/account");
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
        <form className="form text-center">
          <input
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
