import React from "react";
// import PlantCard from "../components/PlantPage/PlantCard";
import PlantSearch from "../components/PlantPage/PlantSearch";
// import placeHolderImage from "../Images/plant-icon.png";
// import API from "../utils/API";

const Plant = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-3"/>
        <div className="col-sm-6 text-center">
          <h2>Trefle.io Plants</h2>
          <hr/>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-sm-3" /> */}
        <PlantSearch/>
        {/* <PlantCard /> */}
      </div>
    </div>
  );
};

export default Plant;
