import API from "./searchApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const ArticleSearch = () => {
  const [search, setSearch] = useState([]);

  const [type, setType] = useState({
    title: "",
    author: "",
  });


  useEffect(() => {
    API.search("Flowers")
      .then((response) => {
        // console.log(response.data);
        setSearch(response.data.articles);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  function handleSearch(e) {
    // e.preventDefault();
    API.search(e)
      .then((response) => {
        console.log(response.data.articles);
        setSearch(response.data.articles);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  function loadArticles() {
    API.getArticles()
      .then(res => 
        setSearch(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleFormSubmit(event) {

      API.saveArticle({
        title: type.title,
        author: type.author,
      })
        .then(() => setType({
          title: "",
          author: "",
        }))
        .then(() => loadArticles())
        .catch(err => console.log(err));
    }



  return (
    <>
      <input
        className="form-control nav-search"
        type="text"
        placeholder="What articles are you looking for?"
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {search.map((type) => {
        return (
          <div className ="container"> 
          <div key={type.id} className="col-sm-12">
              <div className="card" style={{
                margin: "50px",
              }}>
                <div><h1> {type.title}</h1></div>
                <div> <h3> Article By: {type.author}</h3></div>
              <div
                className="practice image"
                style={{
                  backgroundImage: `url(${type.urlToImage})`,
                  height: "350px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                ></div>
                <p> <Link to={type.url}>Read More Here:</Link></p>
                <p 
                  onClick={handleFormSubmit}
                > Save this article to your Profile    
              </p>
            </div>
          </div>
          </div>
        );
      })}
    </>
  );
};


    
export default ArticleSearch;
