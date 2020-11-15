import React, { useEffect, useState } from "react";
import API from "../ArticleSearch/searchApi";

const SavedArticles = () => {
  const [articles, setArticles] = useState([]);

  const refreshArticle = () => {
    API.getArticles()
      .then((response) => {
        // console.log("HIT REFRESH")
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  useEffect(() => {
    API.getArticles()
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  function deleteArticle(id) {
    API.deleteArticles(id)
      .then((res) => API.getArticles())
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
                <div className="card card-body">
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
      {/* </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default SavedArticles;
