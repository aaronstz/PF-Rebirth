import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserName} from "../../Redux/Actions";

export default function SearchUser(){
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")

    function handleInput(e){
        e.preventDefault()
        setUserName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getUserName(userName))
            setUserName("")
    }



    return(
        <div>
            <input type="text" value={userName} placeholder="search user..." name="UserName" onChange={e => handleInput(e)}/>
            <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}