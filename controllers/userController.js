const express = require("express");
let router = express.Router();
const db = require("../models");

router.get("/api/users", (req,res) =>{
    console.log("Clicked to retrieve users");
});

module.exports = router;