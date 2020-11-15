import React from "react";
import ArticleContainer from "../../components/ArticleSearch/index";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import "./Articles.css";

function Articles(props) {
  return (
    <div id="articlesBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 id="articlesHeader"> Trending Plant News Articles </h2>
            <div className="card">
              <div className="card-body">
                {/* <ArticleContainer /> */}
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
