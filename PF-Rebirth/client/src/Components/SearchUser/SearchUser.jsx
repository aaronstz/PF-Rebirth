import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserName, getUsers} from "../../Redux/Actions";

export default function SearchUser(){
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")
    const rebirthApp =  "RebirthApp"

 let user = null;
  if(localStorage.user){
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }


    function handleSubmit(){
        if(userName){
            dispatch(getUserName(userName))
        }else{
            dispatch(getUsers())
        }
        setUserName("")}


    function handleEnter(userName){
        handleSubmit(userName);
        setUserName("")}



    return(
        <div>
            <div>
                <input 
                    type="text" 
                    value={userName}
                    placeholder="search user..." 
                    name="UserName" 
                    onChange={e => setUserName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleEnter(userName)}
                />
                <button type="submit" onClick={handleSubmit} >Search</button>
                <button type="submit" onClick={handleSubmit} >All Users</button>
                <Link to={"/users/banned"} >
                    <button>go banned</button>
                </Link>
                { user && user.userName === rebirthApp ?
                    <Link to={"/admin"}>
                        <button>Go to Admins</button>  
                    </Link>  : null
                }   
            </div>
        </div>
    )
}