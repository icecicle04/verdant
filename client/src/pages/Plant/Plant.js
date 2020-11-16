import React from "react";
import PlantSearch from "../../components/PlantPage/PlantSearch";
import "./Plant.css";

const Plant = () => {
  return (
    <div id="plantBackground">
      <div className="container fluid">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6 text-center">
            <h2 id="searchHeader">Search For a Plant</h2>
          </div>
        </div>
        <div className="row">
          <PlantSearch />
        </div>
      </div>
    </div>
  );
};

export default Plant;
