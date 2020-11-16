import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Chat.css";
import chatHead1 from "../../components/Chat/chat";

function Chat(props) {
  return (
    <div className="card card-body" id="chatContainer">
      <form className="card">
        <h2>Forum</h2>
        <div className="messageCard">
          <TextField
            name="title"
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
            id="outlined-multiline-static"
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
        <button className="articlesBtn" id="send-post">Create Post</button>
        <div>
          <h2>Current Posts</h2>
          <div className="message">
            <i>
              <span>{chatHead1}</span>
              <h3 className="forum-header">Exotic Plants?!</h3>
              <h3 className="forum-header">by Cody Bosna</h3>
              <div className="headingMessage">
                Hey everyone, I'm looking to up my plant game. My collection so
                far consists of some Philodendron, Dandelions, and Orchids... A
                little basic, I know. I'm looking to expand my horizon to the
                more exotic side. Please let me know if you guys have any
                experience with Ghost Orchids, Hawaiian Hibiscus, or Chocolate
                Cosmos since those are what I am looking to add to my office
                forestry next.
              </div>
            </i>
            <br></br>
            <button className="articlesBtn" id="reply-btn">Reply</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Chat;
