import React, { useState } from "react";
import Chat from "./Chat";
import "./MessageBoard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat, getMessage } from "../../../../../Redux/Actions";

export default function MessageBoard() {
  let {loadChat,setLoadChat}=useState(true);
 const allMessages=useSelector((state)=>state.message)

  return (
    <React.Fragment>
          <div className="msg-container">
        <div className="chat-title"> Message Board<img src="" alt="" /></div>
        <div className="chat-container">
          <Chat allMessages={allMessages}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
