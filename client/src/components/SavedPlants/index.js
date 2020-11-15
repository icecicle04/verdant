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
<<<<<<< HEAD
        setAlert({ message: "Deleted plant", type: "success" });
=======
>>>>>>> 8f690aac173a9ce6819d8fc92f407f766668e30e
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
<<<<<<< HEAD
      <h3>My Saved Plants:</h3>
      <hr />
      {plants.map((data) => {
        return (
          <div key={data._id} className="col-sm-6">
            <div className="card plant-card" style={{ margin: "5px" }}>
              <img
                className="card-img-top"
                alt="Card image cap"
                src={data.image_url}
                style={{
                  // backgroundImage: `url(${data.image_url})`,
                  height: "200px",
                  width: "250px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
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
=======
      {/* <div className="container fluid">
        <div className="row">
          <div className="col-sm-12"> */}
      <div className="row accountBackground">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <h2 className="header">My Saved Plants:</h2>
          {plants.map((data) => {
            return (
              <div key={data._id}>
                <div className="card card-body">
                  <h4>{data.common_name}</h4>
                  <div className="column">
                    <img
                      src={data.image_url}
                      alt={data.common_name}
                      style={{
                        // backgroundImage: `url(${type.image_url})`,
                        height: "200px",
                        width: "250px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                  {/* <p>{data.bibliography}</p> */}
                  <div className="column">
                    <button className="articlesBtn" onClick={() => deletePlant(data._id)}>
                      Delete Plant
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
>>>>>>> 8f690aac173a9ce6819d8fc92f407f766668e30e
    </>
  );
}
export default SavedPlants;
