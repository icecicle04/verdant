import axios from "axios";
const APIKEY = "qUuOo7ykLxiI50Mr36MtH1RrYMQSKtfNSPljdwDf618"
// const BASEURL = "https://trefle.io/api/v1/plants?token=";
const SEARCHURL ="https://trefle.io/api/v1/plants/search?token="
const CORS = "https://serene-badlands-79714.herokuapp.com/";

// trefle.io API calls using axios
// eslint-disable-next-line
export default {
    // load: function () {
    //     return axios.get(CORS + BASEURL + APIKEY);
    // },
    search: function(query) {
        return axios.get(CORS + SEARCHURL + APIKEY + "&q=" + query)
    },
    // create and register new user 
    createUser: function (userData) {
        console.log(userData);
        return axios.post("/api/users/register", userData);
    },
    // login existing user 
    logInUser: function(userData){
        return axios.post("/api/users/login", userData)
    },
     // get user from database
     getUser: function(userId){
         console.log("USER", userId)      
        return axios.get("/api/account/" +  userId)
    },
     // save plants
    savePlant: function (savedPlant) {
        console.log(savedPlant);
        return axios.post("/api/plant/SavedPlant", savedPlant);
    },
    // get saved plants f
    getPlant: function () {
        return axios.get("/api/plant/SavedPlant");
    },
    // delete saved plants
    deletePlant: function (deletePlant) {
        console.log("DELETE PLANT INFO", deletePlant);
        return axios.put("/api/plant/SavedPlant", deletePlant);
    },
   
};
