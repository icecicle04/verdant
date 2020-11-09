const router = require("express").Router();
const bodyParser = require("body-parser");
const db = require("../../models");

// create application/json parser
const jsonParser = bodyParser.json();

// create a GET route for testing (getting all users)
router.get("/api/users", (req, res) => {
  console.log("Clicked to retrieve users");
  db.User.find({})
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// delete and find use this var, make sure to swap out when using dynamic data
let userID = "5fa5e3246017de4309aa0ed8";

// find user by ID
router.get("/api/users/:id", (req, res) => {
  console.log("Clicked to retrieve a single user by ID");
  db.User.find({ _id: userID })
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// create user route
router.post("/api/users", jsonParser, (req, res) => {
  console.log(req.body);
  db.User.insertMany(req.body)
    .then((newUser) => {
      console.log("Successfully created a new user");
      console.log(req.body);

      res.json(newUser);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// update user by id
router.put("/api/users/:id", (req, res) => {
    // use findByIdAndUpdate 
});

// delete user by id
router.delete("/api/users/:id", (req, res) => {
    console.log(req.params);
  db.User.findByIdAndDelete({ _id: userID })
    .then((deletedUser) => {
      console.log("Deleted user");
      console.log(deletedUser);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
