import "./chatbot.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect('ws://127.0.0.1/');
// const socket = io.connect('ws://192.168.43.31:5000');
// const socket = io.connect('https://amharic-chatbot-for-aau.herokuapp.com/');

// 
function Chatbot() {
  const [username, setUsername] = useState("username");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(true);
  


  return (
    <div className="App">

      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text" 
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          {/* <button onClick={joinRoom}>Join A Room</button> */}
       
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chatbot;