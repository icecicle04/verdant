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
  bio: {
    type: String,
    unique: false,
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
  article: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
  // using imageData as a placeholder for the image url
  user_image: {
    type: String,
    data: Buffer,
  },
});

const User = mongoose.model("User", userSchema);


module.exports = User;
