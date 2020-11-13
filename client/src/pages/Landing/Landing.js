import React from "react";
import "./Landing.css";
import Gardening from "../../Images/gardening.png";

function Landing(props) {
  return (
    <div className="landingBackground">
      <div className="container">
        <div className="card mb-3" id="landingCard" style={{ width: "50%"}}>
          <div className="row no-gutters">
            <div
              className="col-md-4"
              id="landingPage"
              style={{height: "10%" }}
            >
              <img src={Gardening} alt="Gardening" height="300" width="300" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="landingHeading">
                  Verdant
                </h1>
                <p className="card-text text-right" style={{width: "70%", justifyContent:"right"}}>
                  Adipisicing non pariatur tempor duis sint excepteur velit excepteur eiusmod voluptate voluptate ea. Veniam est ea est magna ipsum ad ad in aliquip. Eiusmod in voluptate deserunt incididunt nisi laboris proident. Irure tempor in officia aute veniam deserunt dolor fugiat sint tempor irure nisi adipisicing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-12 text-center">
    //     </div>
    //   </div>
    // </div>
  );
}

export default Landing;
