import axios from "axios";

const SEARCHURL = "https://newsapi.org/v2/everything?q=";
const APIKEY = "&apiKey=2bdd9ba65e244c398dfcfe644ef1c1be";
const CORS = "https://serene-badlands-79714.herokuapp.com/";

// eslint-disable-next-line
export default {
    search: function(query) {
        return axios.get(CORS + SEARCHURL + query + APIKEY)
    },

    saveArticle: function (article) {
        console.log(article);
        return axios.post("/api/Articles/savedArticles", article);
    },

    getArticles: function () {
        return axios.get("/api/Articles");
    },
    deleteArticles: function(id) {
        return axios.delete("/api/Articles/" + id);
      },

};
