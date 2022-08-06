import React, { useEffect } from "react";
import DashNavBar from "../Dash-NavBar/Dash-NavBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../Redux/Actions/index.js";
import UserDetail from "../../../Components/UserDetail/UserDetail";

export default function DashUsers() {
    
  const dispatch = useDispatch()
  const users = useSelector(s => s.user)

    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    function handleDeleteUser(e){
    e.preventDefault()
    dispatch(deleteUser(e.target.id))
        window.history.go()
    }

  return (
    <div>
      <DashNavBar/>
      <div className="mainDashContU">
         <>
            <div className="conTituloU infoU">
                <h3>USERS</h3>
            </div>
            <div>
                {users && users.map((u)=>
                    <UserDetail
                        handleDeleteUser={handleDeleteUser}
                        name={u.name}
                        lastName={u.lastName}
                        mail={u.mail}
                        image={u.image}
                        userName={u.userName}
                    />
                )}
            </div>
            </>
        </div>
    </div>
  );
}




