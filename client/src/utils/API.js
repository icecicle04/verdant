import axios from "axios";
const BASEURL = "https://trefle.io/api/v1/plants?token=";
const SEARCHURL ="https://trefle.io/api/v1/plants/search?token="
const APIKEY = "qUuOo7ykLxiI50Mr36MtH1RrYMQSKtfNSPljdwDf618";
// CORS Key located in sandox folder and heroku
const CORS = "https://serene-badlands-79714.herokuapp.com/";

// trefle.io API calls using axios
// eslint-disable-next-line
export default {
    load: function () {
        return axios.get(CORS + BASEURL + APIKEY);
    },
    search: function(query) {
        return axios.get(CORS + SEARCHURL + APIKEY + "&q=" + query)
    },
    // create new user 
    createUser: function(userData){
        return axios.post("/api/users/register", userData);
    },
    // find all user by email
    findUser: function(foundUserEmail){
        return axios.get("/api/users/register", foundUserEmail)
    },
    //find a user by ID
    logInUser: function(){
        return axios.get("/api/users" )
    }
}; 
