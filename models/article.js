const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// article schema for the mongoDB 
const articleSchema = new Schema({
    author: {
        type: String,
        trim: true,
        required: true,
      },
      title: {
        type: String,
        trim: true,
        required: true,
      },
      content: {
          type: String,
      },
      users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
      }],
      article_image: {
        type: String,
        data: Buffer
      }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;