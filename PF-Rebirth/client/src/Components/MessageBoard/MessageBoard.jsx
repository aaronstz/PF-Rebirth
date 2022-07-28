import React from "react";
import './MessageBoard/MessageBoard.css'

export default function MessageBoard(chatId="1",mainUserId="12",secondaryUserId="7",message=[{msgUserId:"7",msg:"Hola"},{msgUserId:"12",msg:"Hola que tal"},{msgUserId:"7",msg:"Quiero adoptar al perrito"}]){


return( 
<React.Fragment>
    <div className="container-chat">
   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </React.Fragment>
  );
}



