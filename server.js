require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

// const io = require("socket.io")(server, {
//   cors: {
//     origin: process.env.PORT || 3001,
//     methods: ["GET", "POST"]
//   }
// });

const routes = require("./routes/api/user");
const path = require("path");

const router = require("./routes/api");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./helper");

const PORT = process.env.PORT || 3001;

// Add routes, both API and view
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.static(path.join(__dirname, "public")));

// work with socket.io
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const {error, user} = addUser({id: socket.id, name, room});

    if(error) return callback(error);

    socket.emit('message', {user: 'admin', text: `${user.name}, Welcome to the room ${user.room}`});
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`})

    socket.join(user.room)

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', {user: user.name, text: message})

    callback();
  })

  socket.on("disconnection", () => {
    console.log("User has left!!!");
  });
});

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

// app.listen(PORT, () => {
//   console.log(`App is running on http://localhost:${PORT}`);
// });
