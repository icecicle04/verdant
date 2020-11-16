import React from "react";
import "./Landing.css";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

// import Gardening from "../../Images/gardening.png";
=======
>>>>>>> 320a90ebc1c8fb09ed62e6a01dc5f3c2cf2ce8f4

function Landing(props) {

  let history = useHistory();
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
<<<<<<< HEAD
          {/* TODO: add a route */}
          <button id="landingBtn" onClick={() => history.push('/plant')}>Explore</button>
=======
          <button id="landingBtn">Explore</button>
>>>>>>> 320a90ebc1c8fb09ed62e6a01dc5f3c2cf2ce8f4
        </div>
      </div>
    </div>
  );
}
export default Landing;
