import React from "react";
// import PlantCard from "../components/PlantPage/PlantCard";
import PlantSearch from "../../components/PlantPage/PlantSearch";
import "./Plant.css";

const Plant = () => {
  return (
    <div id="plantBackground">
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-3"/>
        <div className="col-sm-6 text-center">
          <h2 id="searchHeader">Search For a Plant</h2>
          <hr/>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-sm-3" /> */}
        <PlantSearch/>
        {/* <PlantCard /> */}
      </div>
    </div>
    </div>
  );
};

export default Plant;
