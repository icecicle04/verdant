import axios from "axios";

const SEARCHURL = "https://content.guardianapis.com/search?q="
const APIKEY = "&show-fields=thumbnail&api-key=d3d603c5-e29e-41d6-abcd-b89ac28211e1";

// eslint-disable-next-line
export default {
    search: function(query) {
        return axios.get(SEARCHURL + query + APIKEY)
    },

    saveArticle: function (article) {
        console.log(article);
        return axios.post("/api/Articles/savedArticles", article);
    },

    getArticles: function () {
        return axios.get("/api/Articles");
    },
    deleteArticles: function(deleteArticle) {
        console.log("PAYLOAD", deleteArticle)
        return axios.put("/api/Articles/savedArticles", deleteArticle);
      },

};
