require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// consolidate this in the routes folder so we can import multiple files 
// and not just api/user
const routes = require("./routes/api/user");
const path = require("path");

const router = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

// Add routes, both API and view
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/verdant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(router);
// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
