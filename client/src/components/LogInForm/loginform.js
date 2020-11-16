import React, { useContext, useState } from "react";
import AlertContext from "../../context/AlertContext";
import userContext from "../../context/userContext";
import { useHistory } from "react-router-dom";
import "./loginform.css";
import API from "../../utils/API";

const LoginForm = () => {
  const {setJwt} = useContext(userContext);
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


    API.logInUser({
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res.data.user)
        let userId = res.data.user.id;
<<<<<<< HEAD
        // setJwt("");
        setAlert({
          message: `Welcome ${res.data.user.firstName}!`,
          type: "success",
        });
=======
>>>>>>> 320a90ebc1c8fb09ed62e6a01dc5f3c2cf2ce8f4
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
