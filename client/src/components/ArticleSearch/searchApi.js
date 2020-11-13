import axios from "axios";

const SEARCHURL = "https://newsapi.org/v2/everything?q=";
const APIKEY = "&apiKey=e84ad28e61fb42a39ee301879b3bbc5e";

export default {
    search: function(query) {
        return axios.get(SEARCHURL + query + APIKEY)
    },

    saveArticle: function(articleData) {
        return axios.post("/api/savedArticles", articleData);
    },
    getArticles: function() {
        return axios.get("/api/savedArticles");
      },
};