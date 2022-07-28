import React, { useState } from "react";
import Chat from "./Chat";
import './MessageBoard.css'
import Accordion from 'react-bootstrap/Accordion';
import { useEffect} from "react";
export default function MessageBoard({chatId=1,userId=1,userId2=2}){
  let [conversation,setConversation]=useState([{userMsgId:1,msg:"hola"},{userMsgId:2,msg:"hola!"},{userMsgId:1,msg:"adios"},{userMsgId:1,msg:"hola"},{userMsgId:2,msg:"hola!"},{userMsgId:1,msg:"adios"},{userMsgId:1,msg:"hola"},{userMsgId:2,msg:"hola!"},{userMsgId:1,msg:"adios"}])
 

  useEffect(()=>{
    let chatInterval=  setInterval(() => {
    setConversation([...conversation,{userMsgId:Math.round(Math.random()*2),msg:"adios"}]) 
    console.log(conversation) 
    }, 10000);

    return(()=> clearInterval(chatInterval))
  })

return( 
<React.Fragment>
    <div className="msg-container">
   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="msg-chat-title"> Chat de adopción</Accordion.Header>
        <Accordion.Body>
          <Chat id={chatId} userId={userId} userPhoto={""} userId2={userId2} userPhoto2={""} conversation={conversation} newMsg={newMsg}/>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </React.Fragment>
  );
}



