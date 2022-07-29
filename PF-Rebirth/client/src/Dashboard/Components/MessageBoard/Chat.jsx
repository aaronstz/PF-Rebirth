import React from "react";
import './Chat.css'

export default function Chat({id,userId,userPhoto,userId2,userPhoto2,conversation,advisor}){

    return (
        <React.Fragment>
            <div className="chat-container">
                <div className="chat-display">
                    {conversation.map(chat=>{
                    let newMsg=chat.new? "New":""
                    newMsg && advisor("New")
                    return chat.userMsgId===userId?<div  className="chat-right">{chat.msg}</div>
                    : <div className="chat-display"> <div className="chat-new">{newMsg}</div> <div  className="chat-left">{chat.msg}</div></div>                    
                    })}
                   
                </div>
                
            </div>
            <div className="chat-input-container">
                    <input className="chat-input" type="text" />
                    <button className="chat-button"></button>
                </div>
        </React.Fragment>
    )

}
