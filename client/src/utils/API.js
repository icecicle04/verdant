import axios from "axios";
const BASEURL = "https://trefle.io/api/v1/plants?token=";
const SEARCHURL ="https://trefle.io/api/v1/plants/search?token="
const APIKEY = "qUuOo7ykLxiI50Mr36MtH1RrYMQSKtfNSPljdwDf618";
// CORS Key located in sandox folder and heroku
const CORS = "https://serene-badlands-79714.herokuapp.com/";

// trefle.io API calls using axios
export default {
    // load all plants
    load: function() {
        return axios.get(CORS + BASEURL + APIKEY);
    },
    // search for plants
    search: function(query) {
        return axios.get(CORS + SEARCHURL + APIKEY + "&q=" + query)
    },
    // create and register new user 
    createUser: function(userData){
        return axios.post("/api/users/register", userData);
    },
    // login existing user 
    logInUser: function(userData){
        return axios.post("/api/users/login", userData)
    },
   
};