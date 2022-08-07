import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser, getUsers} from "../../Redux/Actions/index.js"
import { useEffect, useState } from "react";
import "./UserDetail.css"



function UserDetail({handleDeleteUser ,name, mail, userName, image, lastName, handleRestoreUser}){
  const dispatch = useDispatch()
  

  return (
    <div className="infoUser">

               <div key={Math.random()} className="favContainerU">



                {
                  (window.location.pathname == "/users/banned") ? 
                  <div>
                      <button onClick={handleRestoreUser} id={mail}>restore</button>
                  </div> :
                  <div>
                  <button onClick={handleDeleteUser} id={mail} >x</button>
                  </div>
                }    
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
