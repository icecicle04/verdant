import React, { useState, useEffect, useContext } from "react";
import AlertContext from "../../context/AlertContext";

import plantStyle from "../PlantPage/plantCard.css";
import API from "../../utils/API";

function SavedPlants() {
  const [plants, setPlants] = useState([]);
  const { setAlert } = useContext(AlertContext);

  // const [value, setValue] = useState();

  // delete button is clicked, page is reloaded and new db plants are set to state
  const refreshPlant = () => {
    API.getPlant()
      .then((response) => {
        // console.log("HIT REFRESH")
        console.log(response.data);
        setPlants(response.data);
        setAlert({ message: "Deleted plant", type: "success" });
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  useEffect(() => {
    API.getPlant()
      .then((response) => {
        console.log("GETTING PLANTS");
        console.log(response.data);
        setPlants(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
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
            <div className="card plant-card" style={{ margin: "5px" }}>
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
                <p className="card-text">
                  Plant bibliography:{" "}
                  <a
                    target="_blank"
                    href={`http://www.google.com/search?q=${data.bibliography}`}
                  >
                    {data.bibliography}
                  </a>
                </p>
                <button onClick={() => deletePlant(data._id)}>
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
