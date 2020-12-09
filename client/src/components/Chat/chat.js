import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";
import io from "socket.io-client";
// import "./chat.css"

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = `localhost:3001`;

  // grab the info from the parameters
  const data = useLocation().search;

  useEffect(() => {
    const userName = new URLSearchParams(data).get("name");
    const roomName = new URLSearchParams(data).get("room");

    console.log(userName);
    console.log(roomName);

    setName(userName);
    setRoom(roomName);

    socket = io(ENDPOINT);
    console.log(socket);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnection");

      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on(
      "message",
      (message) => {
        setMessages([...messages, message]);
      },
      [messages]
    );
  });

  // function for sending messages

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <input
          value={message}
          onChange={(event) => setMessages(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  );
};

export default Chat;
