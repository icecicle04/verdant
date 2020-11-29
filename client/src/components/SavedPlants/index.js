import React, { useState, useEffect, useContext } from "react";
import AlertContext from "../../context/AlertContext";
import jwt from "jsonwebtoken";
import API from "../../utils/API";

function SavedPlants() {
  const [plants, setPlants] = useState([]);
  const { setAlert } = useContext(AlertContext);

  // delete button is clicked, page is reloaded and new db plants are set to state
  const refreshPlant = () => {
    API.getPlant()
      .then((response) => {
        setPlants(response.data);
        setAlert({ message: "Deleted plant", type: "success" });
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  useEffect(() => {
    const localJwt = localStorage.getItem("jwt");
    if (localJwt) {
      const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);
      console.log("DECODED ON PLANT PAGE", decoded.id);

      API.getUser(decoded.id)
        .then((foundUser) => {
          console.log("FOUND ME", foundUser.data.plants);
          setPlants(foundUser.data.plants);
        })
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, []);

  console.log(plants);

  function deletePlant(id) {
    // add functionality to delete plants
    API.deletePlant(id).then((res) => {
      console.log(res);
    });
    refreshPlant();
  }

  return (
    <>
      <div className="col-sm-3" />
      <div className="row">
        <h2 className="header col">My Saved Plants:</h2>
        <hr />
      </div>
      <div className="row">
        {plants.map((data) => {
          return (
            <div key={data._id} className="container fluid col-sm-3">
              <div className="card plant-card" style={{ marginBottom: "3rem" }}>
                <div
                  className="practice image"
                  style={{
                    backgroundImage: `url(${data.image_url})`,
                    height: "200px",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{data.common_name}</b>
                  </h5>
                  <hr />
                  <button
                    className="articlesBtn"
                    onClick={() => deletePlant(data._id)}
                  >
                    Delete Plant
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SavedPlants;
