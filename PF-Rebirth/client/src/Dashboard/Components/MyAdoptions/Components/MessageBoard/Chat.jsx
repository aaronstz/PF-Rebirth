import React, { useEffect, useState } from "react";
import "./Chat.css";
import sendButton from "../../../../../Assets/Messageboard/send.svg";
import {
  CreaUpdateNotification,
  getMessage,
  postMessage,
  putVisto,
} from "../../../../../Redux/Actions"; // warning-> getChat
import { useDispatch, useSelector } from "react-redux";
// import { PUT_VISTO } from "../../../../../Redux/Actions/actionTypes"; warning

export default function Chat({ allMessages, otherMail }) {
  let mail = "";
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  if (infoStorage) mail = user.mail;
  let mailVisto = otherMail;

  const dispatch = useDispatch();
  let [inputChat, setInputChat] = useState("");
  let adoptionId = useSelector((state) => state.adoptionId);

  setTimeout(() => {
    let finalScroll = document.getElementById("scroll");
    finalScroll.scrollTop = finalScroll.scrollHeight;
  }, 200);

  console.log('adoptionId :>> ', adoptionId);

  useEffect(() => {
    dispatch(getMessage(adoptionId))
  }, [dispatch, adoptionId])
  
  function handleClick() {

    inputChat.length > 0 &&
      dispatch(
        postMessage({
          userMail: mail,
          message: inputChat,
          adoptionId: adoptionId,
        })
      );
    setTimeout(() => dispatch(getMessage(adoptionId)), 300);
    setInputChat("");
    let finalScroll = document.getElementById("scroll");
    finalScroll.scrollTop = finalScroll.scrollHeight;
    if (mailVisto) dispatch(putVisto(mailVisto, adoptionId));
    if (mailVisto) dispatch(CreaUpdateNotification(mailVisto));

  }

  function handleOnChange(e) {
    setInputChat(e.target.value);
  }

  return (
    <React.Fragment>
      <div className="chat-container chat-font-size">
        <div id="scroll" className="chat-display">
          {allMessages.length > 0 &&
            allMessages.map((messa) => {
              let newMsg = messa.nuevo ? "--New--" : "";
              return messa.userMail === mail ? (
                <div className="chat-right">{messa.message}</div>
              ) : (
                <div className="chat-left-container">
                  <div className="chat-new">{newMsg}</div>
                  <div className="chat-left">{messa.message}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="chat-input-container chat-font-size">
        <textarea
          className="chat-input"
          name="chat"
          value={inputChat}
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={() => handleClick()} className="chat-button">
          <img src={sendButton} alt="send"></img>{" "}
        </button>
      </div>
    </React.Fragment>
  );
}
