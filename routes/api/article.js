// const router = require("express").Router();
// const db = require("../../models");

// router.get("/api/Articles", (req, res) => {
//     console.log("Clicked to retrieve users");
//     db.Article.find({})
//     .then((foundArticle) => {
//       res.json(foundArticle);
//     })
//     .catch((err) => {
//       if (err) throw err;
//     });
// });

// router.post("/api/Articles/savedArticles", (req, res) => {

// db.Article.create({ title: req.body.title, author: req.body.author })
//         .then((newArticle) => {
//             title = newArticle.title,
//                 author = newArticle.author
//         })
// });


// module.exports = router