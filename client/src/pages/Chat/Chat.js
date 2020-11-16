import React from "react";
// import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import "./Chat.css";
import chatHead1 from "../../components/Chat/chat";

// const socket = io.connect("http://localhost:3001");

function Chat(props) {
  return (
    <div className="card card-body" id="chatContainer">
      <form className="card">
        <h1>Forum</h1>
        <div className="messageCard">
          <TextField
            name="title"
            // onChange={(e) => onTextChange(e)}
            // value={state.name}
            label="Message Title"
            style={{
              backgroundColor: "white",
            }}
            inputProps={{
              style: {
                color: "black",
              },
            }}
          />
        </div>
        <div className="card-body">
          <TextField
            name="message"
            // onChange={(e) => onTextChange(e)}
            // value={state.message}
            id="outlined-multiline-static"
            // variant="outlined"
            label="Message"
            style={{
              backgroundColor: "white",
            }}
            inputProps={{
              style: {
                color: "black",
              },
            }}
          />
        </div>
        <button>Send Post</button>
        <div>
          <h1>Posts</h1>
          {/* {renderChat()} */}
          <div className="message">
            <i>
              <span>{chatHead1}</span>
              <h3>Exotic Plants?!</h3>
              <h3>by Cody Bosna</h3>
              <div className="headingMessage">
                Hey everyone, I'm looking to up my plant game. My collection so
                far consists of some Philodendron, Dandelion's, and Orchids.. A
                little basic, I know. I'm looking to expand my horizon to the
                more exotic side. Please let me know if you guys have any
                experience with Ghost Orchid's, Hawaiian Habiscus, or Chocolate
                Cosmos since those are what I am looking to add to my office
                forestry next.
              </div>
            </i>
            <br></br>
            <button className="replyButton">Reply</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Chat;
