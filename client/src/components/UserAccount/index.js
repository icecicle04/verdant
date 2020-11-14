import React, { useEffect, useState, useContext } from "react";
import TestImage from "../../Images/nickCage.jpg";
import AlertContext from "../../context/AlertContext";
import EditBtn from "../EditBtn/index";
import jwt from "jsonwebtoken";
import userContext from "../../context/userContext";
import API from "../../utils/API";

const AccountPage = () => {
  const { setAlert } = useContext(AlertContext);
  // const {setJwt} = useContext(userContext);
  //   const [jwt, setJwt] = useState("");

  useEffect(() => {
    // grab jwt from local storage and decode the information
    const localJwt = localStorage.getItem("jwt");
    console.log(localJwt);
    // use the token and set it against the secret key to unlock the payload
    const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);
    console.log(decoded);

    setAlert({
      message: `Welcome back ${decoded.firstName} !`,
      type: "success",
    });

    API.getUser(decoded.id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>This will be the user account page</h1>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <img src={TestImage} alt="filler pic" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <h3>brief bio</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the
              </p>
              <EditBtn />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <h3>plant profile section</h3>
              <p>past a variety of plant pictures/profiles here</p>
              <EditBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;