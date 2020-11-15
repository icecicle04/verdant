import React, { useEffect, useState, useContext } from "react";
import TestImage from "../../Images/gardening.png";
import TestImage2 from "../../Images/undraw_environment_iaus.png";
import AlertContext from "../../context/AlertContext";
import jwt from "jsonwebtoken";
import userContext from "../../context/userContext";
import API from "../../utils/API";
import "./UserAccount.css";

const AccountPage = () => {
  const { setAlert } = useContext(AlertContext);
  const { setJwt } = useContext(userContext);
  //   const [jwt, setJwt] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    // grab jwt from local storage and decode the information
    const localJwt = localStorage.getItem("jwt");
    console.log(localJwt);
    if (localJwt) {
      // use the token and set it against the secret key to unlock the payload
      const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);
      console.log(decoded);

      setAlert({
        message: `Welcome ${decoded.firstName} !`,
        type: "success",
      });

      API.getUser(decoded.id)
        .then((response) => {
          // get user information back and set it to state
          console.log("THis is the returned user information", response);
          setUser([response.data]);
        })
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, []);

  return (
    <>
      <div >
        <div className="container fluid">
          {user.map((account) => {
            return (
              <div className="row">
                <div className="col-sm-12">
                  <h2 key={account.id} class="header">Green Thumb: {account.first_name} {account.last_name}</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src={TestImage}
                        alt="Gardening Illustration"
                        className="accountImg"
                      />
                    </div>
                    <div className="col-sm-4">
                    <p id="accountBio">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. 
                      </p>
                      </div>
                    <div className="col-sm-4">
                    <img
                        src={TestImage2}
                        alt="Sprouting Seeds"
                        className="accountImg"
                        id="handsImg"
                      />
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-3" />

                    <div className="col-sm-6">
                      <h3>Green Thumb:</h3>
                      <h4 key={account.id}>
                        {account.first_name} {account.last_name}
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccountPage;
