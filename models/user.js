const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// user schema for the mongoDB 
const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "Enter a  first name for transaction"
      },
      last_name: {
        type: String,
        trim: true,
        required: "Enter a last name for transaction"
      },
      email: {
          type: String,

      },
      // using imageData as a placeholder for the image url 
      user_image: {
        type: String,
        data: imageData
      }
});

const User = mongoose.model("User", userSchema);

module.exports = User;