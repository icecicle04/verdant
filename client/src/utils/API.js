import axios from "axios";
const BASEURL = "https://trefle.io/api/v1/plants?token=";
const APIKEY = "qUuOo7ykLxiI50Mr36MtH1RrYMQSKtfNSPljdwDf618";
const CORS = "https://serene-badlands-79714.herokuapp.com/";

// trefle.io API calls using axios
export default {
    load: function() {
        return axios.get(CORS + BASEURL + APIKEY);
    }
};