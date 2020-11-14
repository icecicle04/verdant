const router = require("express").Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const bcrypt = require("bcryptjs");

// create application/json parser
const jsonParser = bodyParser.json();

// // create a GET route for testing (getting all users)
// router.get("/api/users", (req, res) => {
//   console.log("Clicked to retrieve users");
//   db.User.find({})
//     .then((foundUser) => {
//       res.json(foundUser);
//     })
//     .catch((err) => {
//       if (err) throw err;
//     });
// });

// find user by ID
router.get("/api/account/:user", jsonParser, (req, res) => {
  let userID = req.params.user;
  console.log(userID);

  db.User.findById({ _id: userID })
    .then((foundUser) => {
      // console.log(foundUser);
      res.json(foundUser);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// CREATE AND REGISTER USER ROUTE
router.post("/api/users/register", jsonParser, (req, res) => {
  // destructure the req.body object to grab variables
  const { email, password, first_name, last_name } = req.body;

  db.User.findOne({ email: email })
    .then((foundExistingUser) => {
      if (foundExistingUser) {
        return res.status(400).json("Email address already in use.");
        // console.log(foundUser);
      } else {
        // hashing user password by using bcrypt and salt
        // then setting password to the new hashed password
        bcrypt.hash(password, 10, (err, hash) => {
          // if (err) throw err;
          let password = hash;
          db.User.create({ email, password, first_name, last_name })
            .then((newUser) => {
              const token = jwt.sign(
                {
                  id: newUser._id,
                  firstName: newUser.first_name,
                  lastname: newUser.last_name,
                  emailAddress: newUser.email,
                },
                process.env.JWT_SECRET
              );
              res.json({
                error: false,
                data: token,
                firstName: newUser.first_name,
                result: "complete",
                message: "Successfully signed up new user",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: true,
                data: null,
                message: "unable to sign up",
              });
            });
        });
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// USER LOGIN ROUTE
router.post("/api/users/login", jsonParser, (req, res) => {
  // destructure the req.body object to grab variables
  const { email, password } = req.body;
  // find user in database that matches the user input
  db.User.findOne({ email: email })
    .then((foundUser) => {
      console.log("USER FOUND WITH:", foundUser);
      if (foundUser === null) {
        return res.status(400).json("No matching user in existing database");
      } else {
        // compare user input with existing hashed password
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (err) throw err;
          console.log(result);

          if (result) {
            // res.json("The passwords match");
            // create a web token to store logged user information
            const token = jwt.sign(
              {
                id: foundUser._id,
                firstName: foundUser.first_name,
                lastname: foundUser.last_name,
                emailAddress: foundUser.email,
              },
              process.env.JWT_SECRET
            );

            // send back an object with token and user information
            res.json({
              data: token,
              user: {
                id: foundUser._id,
                firstName: foundUser.first_name,
                lastName: foundUser.last_name,
                email: foundUser.email,
              },
            });
          } else {
            res.status(401).json({
              error: true,
              data: null,
              message: "Credentials did not match",
            });
          }
        });
      }
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

//Routes for Articles 

router.get("/api/Articles", (req, res) => {
  console.log("Clicked to retrieve users");
  db.Article.find({})
    .then((foundArticle) => {
      res.json(foundArticle);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.post("/api/Articles/savedArticles", jsonParser, (req, res) => {
  var { title, author } = req.body;
  db.Article.create({ title, author })
    .then((newArticle) => {
      (title = newArticle.title), (author = newArticle.author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to sign up",
      });
    });
});


//Routes for Plants 

router.get("/api/plant", (req, res) => {
  console.log("Clicked to retrieve users");
  db.Plant.find({})
    .then((foundPlant) => {
      res.json(foundPlant);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.post("/api/plant/SavedPlant", jsonParser, (req, res) => {
  var { common_name, image_url, bibliography, family, genus, scientific_name } = req.body;
  db.Plant.create({ common_name, image_url, bibliography, family, genus, scientific_name })
    .then((newPlant) => {
      (common_name = newPlant.common_name),
        (image_url = newPlant.image_url),
        (bibliography = newPlant.bibliography),
        (family = newPlant.family),
        (genus = newPlant.genus),
        (scientific_name = newPlant.scientific_name);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to save plant",
      });
    });
});
module.exports = router;
