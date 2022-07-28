import React from "react";
import './Chat.css'

export default function Chat({id,userId,userPhoto,userId2,userPhoto2,conversation}){

    return (
        <React.Fragment>
            <div className="chat-container">
                <div className="chat-display">
                    {conversation.map(chat=>{
                       
                    return chat.userMsgId===userId? <div  className="chat-right">{chat.msg}</div>
                    : <div  className="chat-left">{chat.msg}</div>
                    
                    })}
                            
                </div>
                <div className="">

                </div>
            </div>
        </React.Fragment>
    )

}
