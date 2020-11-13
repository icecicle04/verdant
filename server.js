require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// consolidate this in the routes folder so we can import multiple files
// and not just api/user
const routes = require("./routes/api/user");
const path = require("path");
const http = require("http");

const socket = require("socket.io");

const router = require("./routes/api");

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

// const io = socketio(server);

// Add routes, both API and view
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("client/build"));
app.use(express.static(path.join(__dirname, "public")));

// this runs when the client connects
// io.on("connection", (socket) => {
//   console.log("New Connection");

//   socket.emit("message", "Welcome to the Plant Chat!");
// });

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

server.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// socket setup
const io = socket(server);
const usersArr = [];

io
  // specifies main namespace
  .of("/mainspace")
  // what to do on connection
  .on("connection", (socket, path) => {
    // what to do when user joins room
    socket.on("joinRoom", (roomName, username, userimg) => {
      // join room socket action
      socket.join(roomName);
      // const socketid = socket.id;
      usersArr.push(username);
      const userMap = [...new Set(usersArr)];
      // when user joins room in /mainspace
      io
        // specifies what to do when new user joins room in name space
        .of("/mainspace")
        .in(roomName)
        // emit this message
        .emit("newChatter", username, userMap);
    });
    // on message grab roomName and message
    socket.on("message", (roomName, message, username, userimg, id) => {
      // have to specify mainspace
      // have to specify room
      // and grab message
      if (
        message.includes("nigger") ||
        message.includes("fag") ||
        message.includes("faggot") ||
        message.includes("nigga")
      ) {
        io.of("/mainspace")
          .to(roomName)
          .emit(
            "chat-message",
            "^^^ Tried to say a bad word",
            username,
            userimg,
            id
          );
      } else if (message.length > 120) {
        io.of("/mainspace")
          .to(roomName)
          .emit(
            "chat-message",
            "^^^ Tried to send a long message",
            username,
            userimg,
            id
          );
      } else if (
        message.includes("http") ||
        message.includes(".com") ||
        message.includes("www")
      ) {
        io.of("/mainspace")
          .to(roomName)
          .emit(
            "chat-message",
            "^^^ Tried to post a link",
            username,
            userimg,
            id
          );
      } else {
        io.of("/mainspace")
          .to(roomName)
          .emit("chat-message", message, username, userimg, id);
      }
    });
    socket.on("doc-change", (roomName, data) => {
      io.of("/mainspace").to(roomName).emit("shift-doc", data, usersArr);
    });
    socket.on("disconnected", (roomName, username) => {
      const i = usersArr.indexOf(username);
      const leftUser = usersArr.splice(i, 1);
      socket.leave(roomName);
      io.of("/mainspace").to(roomName).emit("left-room", leftUser);
    });
    socket.on(
      "private-message",
      (roomName, message, fromUser, fromUserImg, toUser) => {
        const userMap = [...new Set(usersArr)];
        if (
          message.includes("nigger") ||
          message.includes("fag") ||
          message.includes("faggot") ||
          message.includes("nigga")
        ) {
          io.of("/mainspace")
            .to(roomName)
            .emit(
              "direct-message",
              "^^^ Tried to say a bad word",
              fromUser,
              fromUserImg,
              toUser,
              userMap
            );
        } else if (message.length > 120) {
          io.of("/mainspace")
            .to(roomName)
            .emit(
              "direct-message",
              "^^^ Tried to send a long message",
              fromUser,
              fromUserImg,
              toUser,
              userMap
            );
        } else {
          io.of("/mainspace")
            .to(roomName)
            .emit(
              "direct-message",
              message,
              fromUser,
              fromUserImg,
              toUser,
              userMap
            );
        }
      }
    );
  });
