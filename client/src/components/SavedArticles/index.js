import React, { useEffect, useState } from "react";
import API from "../ArticleSearch/searchApi";

const SavedArticles = () => {
  const [articles, setArticles] = useState([]);

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
      .then(res => API.getArticles())
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="container fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h3>My Saved Articles:</h3>
                {articles.map((data) => {
                  return (
                    <div>
                      <h4>{data.title}</h4>
                      <button onClick={() => deleteArticle(data._id)}>
                        Delete Article
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
};

export default SavedArticles;
