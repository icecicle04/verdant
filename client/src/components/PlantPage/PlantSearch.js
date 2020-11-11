import React, { useState, useEffect } from "react";
import plantStyle from "../PlantPage/plantCard.css";
import API from "../../utils/API";

// a search page for the trefle.io API
const PlantSearch = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    API.search("Philodendron")
      .then((response) => {
        // console.log(response.data);
        setSearch(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  function handleSearch(e) {
    console.log(e);
    // e.preventDefault();
    API.search(e)
      .then((response) => {
        console.log(response.data);
        setSearch(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  return (
    <>
      <input
        className="form-control nav-search"
        type="text"
        placeholder="e.g. Philodendron"
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {search.map((type) => {
        return (
          <div key={type.id} style={plantStyle} className="col-sm-6">
            <div className="card plant-card">
              <div
                className="practice image"
                style={{
                  backgroundImage: `url(${type.image_url})`,
                  height: "350px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="card-body">
                <h5 className="card-title">
                  <u>{type.common_name}</u>
                </h5>
                <p className="card-text">
                  <b>Bibliography:</b> {type.bibliography}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Family:</b> {type.family}
                </li>
                <li className="list-group-item">
                  <b>Genus:</b> {type.genus}
                </li>
                <li className="list-group-item">
                  <b>Scientific Name:</b> {type.scientific_name}
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Save Plant
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlantSearch;
