import React, { useState, useEffect, useContext } from "react";
import plantStyle from "../PlantPage/plantCard.css";
import AlertContext from "../../context/AlertContext";
import API from "../../utils/API";

// a search page for the trefle.io API
const PlantSearch = () => {
  const { setAlert } = useContext(AlertContext);

  const [search, setSearch] = useState([]);
  const [plantType, setplantType] = useState({
    common_name: "",
    image_url: "",
    bibliography: "",
    family: "",
    genus: "",
    scientific_name: "",
  });
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
    API.search(e)
      .then((response) => {
        // how to get this error working?
        if (response.data.data.length <= 0) {
          console.log("no results found");
        }
        console.log(response.data);
        setSearch(response.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  function handleFormSubmit(
    common_name,
    image_url,
    bibliography,
    family,
    genus,
    scientific_name
  ) {
    console.log(common_name);
    console.log(bibliography);
    setplantType({
      common_name: common_name,
      image_url: image_url,
      bibliography: bibliography,
      family: family,
      genus: genus,
      scientific_name: scientific_name,
    });
    API.savePlant({
      common_name: common_name,
      image_url: image_url,
      bibliography: bibliography,
      family: family,
      genus: genus,
      scientific_name: scientific_name,
    }).then((response) => {});
    setAlert({
      message: "Saves a new plant to your account!",
      type: "success",
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
                <button>
                  <a
                    onClick={() =>
                      handleFormSubmit(
                        type.common_name,
                        type.image_url,
                        type.bibliography,
                        type.family,
                        type.genus,
                        type.scientific_name
                      )
                    }
                    className="card-link"
                  >
                    Save Plant
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlantSearch;
