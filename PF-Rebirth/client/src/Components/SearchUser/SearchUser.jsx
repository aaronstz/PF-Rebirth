import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserName, getUsers} from "../../Redux/Actions";

export default function SearchUser(){
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")

    function handleSubmit(){
        if(userName){
            dispatch(getUserName(userName))
        }else{
            dispatch(getUsers())
        }
        setUserName("")
    }

    function handleEnter(userName){
        handleSubmit(userName);
        setUserName("")}



    return(
        <div>
            <input type="text" value={userName}
                placeholder="search user..." 
                name="UserName" 
                onChange={e => setUserName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleEnter(userName)}     />
            <button type="submit" onClick={handleSubmit} >Search</button>
            <button type="submit" onClick={handleSubmit} >All Users</button>
        </div>
    )
}