import React, { useState } from "react";
import Chat from "./Chat";
import "./MessageBoard.css";

import { useEffect } from "react";
export default function MessageBoard({ chatId = 1, userId = 1, userId2 = 2 }) {
  let [conversation, setConversation] = useState([
    { userMsgId: 1, msg: "hola", new: false },
    { userMsgId: 2, msg: "adios", new: true },
  ]);
  let [newAd, setNewAd] = useState("");

  function newAdvisor(n) {
    setNewAd(n);
  }

  useEffect(() => {
    let chatInterval = setInterval(() => {
      setConversation([
        ...conversation,
        { userMsgId: Math.round(Math.random() * 2), msg: "adios" },
      ]);
      console.log(conversation);
    }, 10000);

    return () => clearInterval(chatInterval);
  });

  return (
    <React.Fragment>
      <div className="msg-container">
        <div className="chat-title"> Hola<img src="" alt="" /></div>
        <div className="chat-container">
          <Chat
            id={chatId}
            userId={userId}
            userPhoto={""}
            userId2={userId2}
            userPhoto2={""}
            conversation={conversation}
            advisor={newAdvisor}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
