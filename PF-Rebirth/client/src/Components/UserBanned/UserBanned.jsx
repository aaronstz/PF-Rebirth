import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashNavBar from "../../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import { getUserId, getUsersBanned, UserRestore } from "../../Redux/Actions";
import UserDetail from "../UserDetail/UserDetail";


export default function UsersBanned() {
    const {mail} = useParams()
  const dispatch = useDispatch()
  const users = useSelector(s => s.userBanned)
  console.log('mail', mail)


    useEffect(() => {
        dispatch(getUsersBanned())
    }, [])

    function handleRestoreUser(e){
        e.preventDefault()
        dispatch(UserRestore(e.target.id))
            window.history.go()
        }
    
    
    
  return (
    <div>
        <DashNavBar/>
        <div>
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
        </div> 
    </div>
  );
}
