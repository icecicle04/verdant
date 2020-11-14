require("dotenv").config();
const express = require("express");
const http = require("http");
const io = require("socket.io")(http);
const app = express();
const mongoose = require("mongoose");
// consolidate this in the routes folder so we can import multiple files
// and not just api/user
const routes = require("./routes/api/user");
const path = require("path");
// const http = require("http");

// const socket = require("socket.io");

const router = require("./routes/api");

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  console.log("socket on!");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});
// const server = http.createServer(app);

// const io = socket.io(server);

// Add routes, both API and view
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/verdant",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(router);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// socket setup
// const io = socket(server)
