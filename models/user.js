const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// user schema for the mongoDB
const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: "Enter a first name",
  },
  last_name: {
    type: String,
    trim: true,
    required: "Enter a last name",
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 5,
    required: "Enter a password",
  },
  plants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plant",
    },
  ],
  // using imageData as a placeholder for the image url
  user_image: {
    type: String,
    data: Buffer,
  },
});

const User = mongoose.model("User", userSchema);

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// User.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password
// User.addHook("beforeCreate", function (user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

module.exports = User;
