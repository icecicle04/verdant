const User = require("../models/user")
const mongoose = require("mongoose");
let db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/verdant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// setup seed data for the user model
const userData = [
    new User({
        first_name: "Bobby",
        last_name: "Herman",
        email: "bobby@gmail.com"
    }),
    new User({
        first_name: "Dillon",
        last_name: "Chancellor",
        email: "dillpickle3@gmail.com"
    }),
    new User({
        first_name: "Kim",
        last_name: "Shala",
        email: "kimmy@gmail.com"
    })
];

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