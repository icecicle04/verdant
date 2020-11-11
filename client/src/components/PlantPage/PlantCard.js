import React, { useEffect, useState } from "react";
// import placeHolderImage from "../Images/plant-icon.png";
import plantStyle from "../PlantPage/plantCard.css";
import API from "../../utils/API";

const PlantCard = () => {
  const [plant, setPlant] = useState([]);

  // similar to componentDid Mount
  useEffect(() => {
    API.load()
      .then((response) => {
        console.log("hit trefle.io ===");
        // console.log(response.data.data);
        setPlant(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  console.log(plant);

  return (
    <>
      {plant.map((type) => {
        return (
          <div  key={type.id} style={plantStyle} className="col-sm-6">
            <div className="card plant-card">
              <div
                className="practice image"
                style={{
                  backgroundImage: `url(${type.image_url})`,
                  height: "350px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            
              <div className="card-body">
                <h5 className="card-title">{type.common_name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Family: {type.family}</li>
                <li className="list-group-item">Genus: {type.genus}</li>
                <li className="list-group-item">
                  Scientific name: {type.scientific_name}
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Save Plant
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlantCard;
