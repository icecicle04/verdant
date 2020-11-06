const User = require("../models/user")
const mongoose = require("mongoose");

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

for (let i = 0; i < userData.length; i++){
    userData[i].save();
}