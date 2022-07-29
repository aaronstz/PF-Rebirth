import React from "react";
import './Chat.css'
import sendButton from '../../../Assets/Messageboard/send.svg'

export default function Chat({id,userId,userPhoto,userId2,userPhoto2,conversation,advisor}){

    return (
        <React.Fragment>
            <div className="chat-container chat-font-size">
                <div className="chat-display">
                    {conversation.map(chat=>{
                    let newMsg=chat.new? "--New--":""
                    newMsg && advisor("New")
                    return chat.userMsgId===userId?<div  className="chat-right">{chat.msg}</div>
                    : <div className="chat-left-container"> <div className="chat-new">{newMsg}</div> <div  className="chat-left">{chat.msg}</div></div>                    
                    })}
                   
                </div>
                
            </div>
            <div className="chat-input-container chat-font-size">
                    <textarea className="chat-input"  />
                    <button className="chat-button"><img src={sendButton}></img> </button>
                </div>
        </React.Fragment>
    )

}
