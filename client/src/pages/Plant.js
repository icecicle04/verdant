import React, { useEffect, useState } from "react";
import API from "../utils/API";

const Plant = () => {
  // similar to componentDid Mount
  useEffect(() => {
    API.load()
      .then((response) => {
        console.log("hit trefle.io ===");
        console.log(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>This will hold the trefle.io informaiton</h2>
        </div>
      </div>
    </div>
  );
};

export default Plant;
