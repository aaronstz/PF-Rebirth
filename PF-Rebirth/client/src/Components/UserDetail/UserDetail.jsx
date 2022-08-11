// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, getUsers } from "../../Redux/Actions/index.js";
// import { useEffect, useState } from "react";
import "./UserDetail.css";

function UserDetail({
  handleDeleteUser,
  name,
  mail,
  userName,
  image,
  lastName,
  handleRestoreUser,
  handleAdmin,
  handleDeleteAdmin,
}) {
  // const dispatch = useDispatch();
  const rebirthApp = "RebirthApp";

  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  return (
    <div key={Math.random()} className="favContainerU">
      <div>
        {window.location.pathname === "/users/banned" ? (
          <div>
            <button
              onClick={handleRestoreUser}
              id={mail}
              className="BtnRestore"
            ></button>
          </div>
        ) : window.location.pathname === "/admin" ? null : (
          <div>
            <button
              className="BtnCloseUser"
              onClick={handleDeleteUser}
              id={mail}
            ></button>
          </div>
        )}
      </div>
      <div>
        {user && user.userName === rebirthApp ? (
          window.location.pathname === "/users" ? (
            <div>
              <button
                onClick={handleAdmin}
                id={mail}
                className="BtnAddAdmin"
              ></button>
            </div>
          ) : window.location.pathname === "/users/banned" ? null : (
            <button
              onClick={handleDeleteAdmin}
              id={mail}
              className="BtnDelAdmin"
            ></button>
          )
        ) : null}
      </div>
      <div className="favcardLeftPhotoU">
        <div className="imgFavorU">
          {image && <img src={image} alt="user" className="img" />}
        </div>
      </div>
      <div className="favcardLeftU">
        <span>{name}</span>
        <span>{lastName}</span>
      </div>
      <div className="favcardRightU">
        <span>{userName}</span>
        <span>{mail}</span>
      </div>
    </div>
  );
}

export default UserDetail;
