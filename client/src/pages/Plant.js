import React from "react";
import PlantCard from "../components/PlantPage/PlantCard";
// import placeHolderImage from "../Images/plant-icon.png";
// import API from "../utils/API";

const Plant = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>This will hold the trefle.io informaiton</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3" />
        <PlantCard />
      </div>
    </div>
  );
};

export default Plant;
