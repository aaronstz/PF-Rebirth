import React, { useState } from "react";
import Chat from "./Chat";
import "./MessageBoard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat, getMessage } from "../../../../../Redux/Actions";

export default function MessageBoard() {
  let mail=""
  let {loadChat,setLoadChat}=useState(true);
 const allMessages=useSelector((state)=>state.message)
 const adoptChat= useSelector((state)=> state.adoptionChat)
const dispatch= useDispatch();
const infoStorage = localStorage.getItem("user");
    const user = JSON.parse(infoStorage)
    if(infoStorage) mail= user.mail
    console.log(adoptChat)
useEffect(()=>{
  let chatUpdate=setInterval(() => {
    dispatch(getChat(mail))
  }, 10000); 
  document.getElementsByClassName("container-lateral-bar").length &&
    setTimeout(()=>{document.getElementsByClassName("container-lateral-bar")[0].click()},300)
  return ()=>clearInterval(chatUpdate)
},[dispatch])
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
