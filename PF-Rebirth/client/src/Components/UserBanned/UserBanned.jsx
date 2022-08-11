import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashNavBar from "../../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import {getUsersBanned, UserRestore } from "../../Redux/Actions"; //warning->getUserId eliminado
import UserDetail from "../UserDetail/UserDetail";
import NotFound from '../../Components/NotFound/NotFound'
import './UserBanned.css'

export default function UsersBanned() {
  const dispatch = useDispatch()
  const users = useSelector(s => s.userBanned)
  
    useEffect(() => {
        dispatch(getUsersBanned())
    }, [dispatch]) //warning

    function handleRestoreUser(e){
        e.preventDefault()
        dispatch(UserRestore(e.target.id))
            window.history.go()
        }
    
  return (
    <div>
        <DashNavBar/>
        <div className="DashcontainerMain">
            <div className="mainDashUserBanned">
            <div className="userTituloBanned">
            <h3>USERS BANNED</h3>
            </div>

            <div>
                {!users.length ?(
                    <div className="notFound-banned">
                        <NotFound/>
                        </div>
                ):<>
                { 
                users && users.map((u) =>
                    <UserDetail
                        handleRestoreUser={handleRestoreUser}
                        name={u.name}
                        lastName={u.lastName}
                        mail={u.mail}
                        image={u.image}
                        userName={u.userName}
                    />)
            }
                </>}
            
            </div> 
            </div>
        </div>
    </div>
  );
}
