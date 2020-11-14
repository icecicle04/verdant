import React from "react";
import "./Landing.css";
// import Gardening from "../../Images/gardening.png";

function Landing(props) {
  return (
    <div className="landingBackground">
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h1 className="landingHeading text-center">Verdant</h1>
        </div>
        <div className="col-lg-8 align-items-center justify-content-center card-body">
          <p
            className="card card-text align-items-center justify-content-center text-center mb-5"
            style={{ width: "55%" }}
          >
            Adipisicing non pariatur tempor duis sint excepteur velit excepteur
            eiusmod voluptate voluptate ea. Veniam est ea est magna ipsum ad ad
            in aliquip. Eiusmod in voluptate deserunt incididunt nisi laboris
            proident. Irure tempor in officia aute veniam deserunt dolor fugiat
            sint tempor irure nisi adipisicing
          </p>
          <button id="landingBtn">Explore</button>
        </div>
      </div>
    </div>
  );
}
export default Landing;
