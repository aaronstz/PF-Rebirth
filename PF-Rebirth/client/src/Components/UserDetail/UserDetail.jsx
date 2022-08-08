import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser, getUsers} from "../../Redux/Actions/index.js"
import { useEffect, useState } from "react";
import "./UserDetail.css"



function UserDetail({handleDeleteUser ,name, mail, userName, image, lastName, handleRestoreUser, handleAdmin, handleDeleteAdmin}){
  const dispatch = useDispatch()
 const rebirthApp =  "RebirthApp"

 let user = null;
  if(localStorage.user){
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }


  return (
    <div className="infoUser">

               <div key={Math.random()} className="favContainerU">
                <div>
                {
                  (window.location.pathname == "/users/banned") ? 
                    <div>
                      <button onClick={handleRestoreUser} id={mail}>restore</button>
                    </div> :
                  (window.location.pathname == "/admin") ? null : 
                    <div>
                      <button onClick={handleDeleteUser} id={mail} >x</button>
                    </div>
                }    
                </div>
                <div>
                  { user && user.userName === rebirthApp ?
                      (window.location.pathname == "/users") ? 
                        <button onClick={handleAdmin} id={mail}>
                          hacer admin
                        </button> :
                      (window.location.pathname == "/users/banned") ? null :
                        <button onClick={handleDeleteAdmin} id={mail}>
                          delete admin
                        </button> : null
                  }
                </div>
                <div className="favcardLeftPhotoU">
                    <div className="imgFavorU">
                      {image && (
                          <img src={image} alt="user" className="img" />
                          )}
                    </div>
                </div>
                <div className="favcardLeftU">
                  <span>{name}</span>
                  <span>{lastName}</span>
                </div>
                <div className="favcardCenterU">
                    <span>{userName}</span>
                    <span>{mail}</span>
                </div>
              </div>
        </div>
  );
}

export default UserDetail;
