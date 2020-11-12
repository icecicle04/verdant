import React from "react";
import ArticleContainer from "../components/ArticleSearch";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch"


function Articles(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1> Trending Plant News Articles </h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name of Article Here</h5>
              <ArticleContainer />
              <ArticleSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
