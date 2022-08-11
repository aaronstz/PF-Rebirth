import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import DashNavBar from "../../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import { getUsers, makeAdmin } from "../../Redux/Actions";
import UserDetail from "../UserDetail/UserDetail";
import NotFound from "../../Components/NotFound/NotFound";
import "./Admins.css";

export default function Admins() {
  // const {mail} = useParams()
  const dispatch = useDispatch();
  const users = useSelector((s) => s.user);
  const admins = users.filter(
    (a) => a.isAdmin === true && a.userName !== "RebirthApp"
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); //warning->eliminar dispatch si algo rompe

  function handleDeleteAdmin(e) {
    e.preventDefault();
    dispatch(makeAdmin(e.target.id));
    window.history.go();
  }

  return (
    <div>
      <DashNavBar />
      <div className="DashcontainerMain">
        <div className="mainDashAdmin">
          <div className="adminTitulo">
            <h3>ADMINS</h3>
          </div>
          <div>
            {!admins.length ? (
              <div className="notFound-admin">
                <NotFound />
              </div>
            ) : (
              <>
                {admins &&
                  admins.map((u) => (
                    <UserDetail
                      handleDeleteAdmin={handleDeleteAdmin}
                      name={u.name}
                      lastName={u.lastName}
                      mail={u.mail}
                      image={u.image}
                      userName={u.userName}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
