import React, { useEffect } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  makeAdmin,
} from "../../../Redux/Actions/index.js";
import UserDetail from "../../../Components/UserDetail/UserDetail";
import SearchUser from "../../../Components/SearchUser/SearchUser";
import NotFound from "../../../Components/NotFound/NotFound";
import DashNavBar from "../Dash-NavBar/Dash-NavBar";
export default function DashUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((s) => s.user);
  const users = allUsers.filter((e) => e.isAdmin === false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function handleDeleteUser(e) {
    e.preventDefault();
    dispatch(deleteUser(e.target.id));
    window.history.go();
  }
  function handleAdmin(e) {
    e.preventDefault();
    dispatch(makeAdmin(e.target.id));
    window.history.go();
  }

  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        <div className="mainDashUser">
          <div className="userTitulo">
            <h3>USERS</h3>
          </div>

          <SearchUser />
          {!users.length ? (
            <div className="notFound-user">
              <NotFound />
            </div>
          ) : (
            <>
              {users &&
                users.map((u) => (
                  <UserDetail
                    key={Math.random()}
                    handleAdmin={handleAdmin}
                    handleDeleteUser={handleDeleteUser}
                    name={u.name}
                    lastName={u.lastName}
                    mail={u.mail}
                    image={u.image}
                    userName={u.userName}
                    isAdmin={u.isAdmin}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
