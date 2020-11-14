var express = require("express");
var app = express();
var router = express.Router();

router.get("/api/config", (req, res) => {
  res.json({
    success: true,
    name: "bob",
  });
});


module.exports = router;
