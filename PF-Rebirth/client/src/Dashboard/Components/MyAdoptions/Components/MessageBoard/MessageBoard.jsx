import React from "react"; //warning-> { useState }
import Chat from "./Chat";
import "./MessageBoard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../../../../../Redux/Actions"; //warning-> getMessage

export default function MessageBoard() {
  let mail = "";
  const allMessages = useSelector((state) => state.message);
  const adoptChat = useSelector((state) => state.adoptionChat);
  const dispatch = useDispatch();
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  if (infoStorage) mail = user.mail;

  let otherMail = "";

  if (allMessages.length > 0)
    otherMail =
      allMessages[0].adoption.ownerMail === mail
        ? allMessages[0].adoption.userMail
        : allMessages[0].adoption.ownerMail;
  let chat = document.getElementsByClassName("container-lateral-bar").length;
  useEffect(() => {
    chat && dispatch(getChat(mail));
    let chatUpdate =
      chat &&
      setInterval(() => {
        dispatch(getChat(mail));
      }, 2000);

    setTimeout(() => {
      document.getElementsByClassName("container-lateral-bar").length &&
        document.getElementsByClassName("container-lateral-bar")[0].click();
    }, 500);
    return () => clearInterval(chatUpdate);
  }, [dispatch, chat, mail]);

  return (
    <React.Fragment>
      <div className="msg-container">
        <div className="chat-title">
          {" "}
          Message Board
          <img src="" alt="" />
        </div>
        <div className="chat-container">
          <Chat allMessages={allMessages} otherMail={otherMail} />
        </div>
      </div>
    </React.Fragment>
  );
}
