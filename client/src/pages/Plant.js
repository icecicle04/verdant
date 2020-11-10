import React, { useEffect, useState } from "react";
// import placeHolderImage from "../Images/plant-icon.png";
import API from "../utils/API";

const Plant = () => {
  const [plant, setPlant] = useState([]);

  // similar to componentDid Mount
  useEffect(() => {
    API.load()
      .then((response) => {
        console.log("hit trefle.io ===");
        console.log(response.data.data);
        setPlant(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

//   console.log(plant);

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>This will hold the trefle.io informaiton</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <img
            src={plant[0].image_url}
            alt={plant.common_name}
            width="200"
            height="200"
          />
          <ul className="list-group">
            {plant.map((type) => {
              return (
                <div key={type.id} className="plant-units">
                  <li>{type.common_name}</li>
                  <li>
                
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plant;
