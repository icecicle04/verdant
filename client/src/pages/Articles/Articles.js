import React from "react";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import "./Articles.css";

function Articles(props) {
  return (
    <div id="articlesBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" id="articles-div">
            <h2 id="articlesHeader">Trending Articles</h2>
            <div className="card">
              <div className="card-body">
                <ArticleSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
