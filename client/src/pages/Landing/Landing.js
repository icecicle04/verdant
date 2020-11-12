import React from "react";
import "./Landing.css";
import Gardening from "../../Images/gardening.png";

function Landing(props) {
  return (
    <div className="landingBackground">
      <div className="container">
        <div className="card mb-3" style={{ width: "50%"}}>
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
                <h1 classNameName="landingHeading">
                  <strong>Verdant</strong>
                </h1>
                <p className="card-text text-right" style={{width: "70%", justifyContent:"right"}}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
