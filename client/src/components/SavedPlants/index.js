import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function SavedPlants() {
  const [plants, setPlants] = useState([]);
  // const [value, setValue] = useState();

  // delete button is clicked, page is reloaded and new db plants are set to state
const refreshPlant = () =>{
  API.getPlant()
  .then((response) => {
    // console.log("HIT REFRESH")
    console.log(response.data);
    setPlants(response.data);
  })
  .catch((err) => {
    if (err) throw err;
  });
}

  useEffect(() => {
    API.getPlant()
      .then((response) => {
        console.log("GETTING PLANTS");
        console.log(response.data);
        setPlants(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  console.log(plants);
  function deletePlant(id) {
    // add functionality to delete plants
    API.deletePlant(id).then((res) =>{
      console.log(res);
    })
    refreshPlant();
  }

  return (
    <>
      <div className="container fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h3>My Saved Plants:</h3>
                {plants.map((data) => {
                  return (
                    <div key={data._id}>
                      <h4>{data.common_name}</h4>
                      <img
                        src={data.image_url}
                        alt={data.common_name}
                        style={{
                          // backgroundImage: `url(${type.image_url})`,
                          height: "200px",
                          width: "250px",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <p>{data.bibliography}</p>
                      <button onClick={() => deletePlant(data._id)}>
                        Delete Plant
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SavedPlants;
