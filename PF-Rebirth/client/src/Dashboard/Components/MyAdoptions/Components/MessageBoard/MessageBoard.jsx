import React from "react"; //warning-> { useState }
import Chat from "./Chat";
import "./MessageBoard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../../../../../Redux/Actions"; //warning-> getMessage

export default function MessageBoard() {

let mail=""
const allMessages=useSelector((state)=>state.message)
const dispatch= useDispatch();
const infoStorage = localStorage.getItem("user");
    const user = JSON.parse(infoStorage)
    if(infoStorage) mail= user.mail
    
 let chat= document.getElementsByClassName("container-lateral-bar").length 
useEffect(()=>{
   
  let chatUpdate= chat && setInterval(() => {
    dispatch(getChat(mail))
  }, 10000); 
 
    setTimeout(()=>{ document.getElementsByClassName("container-lateral-bar").length && document.getElementsByClassName("container-lateral-bar")[0].click()},300)
  return ()=>clearInterval(chatUpdate)
},[dispatch, chat, mail])
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
