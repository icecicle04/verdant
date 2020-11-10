import React, { useEffect, useState } from "react";
// import placeHolderImage from "../Images/plant-icon.png";
import API from "../../utils/API";

const PlantCard = () => {

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
  
    console.log(plant);

    return (
        <div className="col-sm-6">
            {plant.map((type) => {
              return (
               
                <div  key={type.id} className="card fluid">
                <img
                  src={type.image_url}
                  alt={type.common_name}
                  width="350"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              );
            })}
        </div>
    );
};

export default PlantCard;