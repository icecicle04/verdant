const router = require("express").Router();
const db = require('../../models');

// create a GET route for testing
router.get("/api/users", (req,res) =>{
    console.log("Clicked to retrieve users");
    db.User.find({}).then(foundUser =>{
        console.log(foundUser);
    }).catch((err) =>{
        if (err) throw err;
    })

});

module.exports = router;