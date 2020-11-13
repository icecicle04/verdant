import React, { useContext, useState, Component } from "react";
import AlertContext from "../../context/AlertContext";
import API from "../../utils/API";
import "./Form.css";

const Form = () => {
  const [formObject, setFormObject] = useState({});
  const { setAlert } = useContext(AlertContext);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.createUser({
      first_name: formObject.firstName,
      last_name: formObject.lastName,
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res.data);
        setAlert({
          message: `Successfully signed up! Welcome to Verdant ${res.data.user.firstName}`,
          type: "success",
        });
      })
      .catch((err) => {
        setAlert({message: "Failed to lsign you up", type: "danger"})
      });
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
