import React, { useEffect, useState, useContext } from "react";
import AlertContext from "../../context/AlertContext";
import jwt from "jsonwebtoken";
import API from "../ArticleSearch/searchApi";
import API2 from "../../utils/API";


const SavedArticles = () => {
  const [articles, setArticles] = useState([]);
  const { setAlert } = useContext(AlertContext);
  const localJwt = localStorage.getItem("jwt");

  const refreshArticle = () => {
    if (localJwt) {
      const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);

      API2.getUser(decoded.id).then((foundUser) => {
      
        setArticles(foundUser.data.article);
      });
    }
  };

  useEffect(() => {
    if (localJwt) {
      const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);

      API2.getUser(decoded.id).then((foundUser) => {
        // console.log("FOUND USER", foundUser.data.article);
        setArticles(foundUser.data.article);
      });
    }
  }, []);

  function deleteArticle(ArticleId, UserId) {

    const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);
    UserId = decoded.id;

    API.deleteArticles({ArticleId, UserId})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    refreshArticle();
  }

  return (
    <>
      <div className="row ">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <h2 className="header">My Saved Articles:</h2>
          {articles.map((data) => {
            return (
              <div key={data._id}>
                <div
                  className="card card-body"
                  style={{
                    margin: "20px",
                  }}
                >
                  <h4>{data.title}</h4>
                  <img
                    className="col-sm-12"
                    src={data.imageUrl}
                    alt={data.title}
                    style={{
                      height: "200px",
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="row buttonRow">
                    <button class="articlesBtn" href={data.url}>
                      Read More
                    </button>
                    <button
                      class="articlesBtn"
                      style={{
                        width: "8.5rem",
                      }}
                      onClick={() => deleteArticle(data._id)}
                    >
                      Delete Article
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SavedArticles;
