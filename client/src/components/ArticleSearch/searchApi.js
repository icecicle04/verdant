import axios from "axios";

const SEARCHURL = "https://newsapi.org/v2/everything?q=";
const APIKEY = "&apiKey=2bdd9ba65e244c398dfcfe644ef1c1be";
// eslint-disable-next-line
export default {
    search: function(query) {
        return axios.get(SEARCHURL + query + APIKEY)
    },

    saveArticle: function(title, author) {
        return axios.post("/api/Articles/savedArticles", {title,author} );
    },
    
    getArticles: function () {
        return axios.get("/api/Articles/savedArticles");
    },

};
