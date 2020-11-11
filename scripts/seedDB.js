const User = require("../models/user");
const Article = require("../models/article");
const Plant = require("../models/plant");
const mongoose = require("mongoose");
let db = require("../models/index");

// can we add all models to one large seed file?
//=======================
// run 'node seedDB.js' from in the scripts file to add seed data and connect to db
//=======================

// connect to the db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/verdant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// setup dumdum data for the user model
const userData = [
    new User({
        first_name: "Bobby",
        last_name: "Herman",
        email: "bobby@gmail.com",
        password: "12345",
    }),
    new User({
        first_name: "Dillon",
        last_name: "Chancellor",
        email: "dillpickle3@gmail.com",
        password: "password123",
    }),
    new User({
        first_name: "Kim",
        last_name: "Shala",
        email: "kimmy@gmail.com",
        password: "testing1234",
    })
];

// delete, then insert summy data into the User collection of verdant db
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  