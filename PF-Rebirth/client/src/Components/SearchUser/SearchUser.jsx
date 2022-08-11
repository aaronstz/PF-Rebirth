import React, { useState } from "react";
import "./SearchUser.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserName, getUsers } from "../../Redux/Actions";

export default function SearchUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const rebirthApp = "RebirthApp";

  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  function handleSubmit() {
    if (userName) {
      dispatch(getUserName(userName));
    } else {
      dispatch(getUsers());
    }
    setUserName("");
  }

  function handleEnter(userName) {
    handleSubmit(userName);
    setUserName("");
  }

  return (
    <div className="searchUserRow">
      <div className="contSearchU">
        <div className="input-groupU">
          <input
            className=""
            type="text"
            value={userName}
            placeholder="Search..."
            name="UserName"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEnter(userName)}
          />
          <button
            className="btn-pink btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <div className="break"></div>
        <button
          className="mt-2 mx-1 btn-pink btn btn-primary2"
          type="submit"
          onClick={handleSubmit}
        >
          All Users
        </button>
        <Link to={"/users/banned"}>
          <button className="mt-2 mx-1 btn-pink btn btn-primary2">
            Banned
          </button>
        </Link>
        {user && user.userName === rebirthApp ? (
          <Link to={"/admin"}>
            <button className="mt-2 mx-1 btn-pink btn btn-primary">
              Go to Admins
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
