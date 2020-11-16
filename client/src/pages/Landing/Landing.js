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
           Whether you've already got a green thumb or are still cultivating one, there's always room to grow.<br /> <br />Let Verdant help you bloom. 
          </p>
          {/* TODO: add a route */}
          <button id="landingBtn">Explore</button>
        </div>
      </div>
    </div>
  );
}
export default Landing;
