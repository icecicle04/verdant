const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// article schema for the mongoDB 
const articleSchema = new Schema({
    url: {
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
      article_owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
      },
      imageUrl: {
        type: String,
        trim: true,
        required: true,
      },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;