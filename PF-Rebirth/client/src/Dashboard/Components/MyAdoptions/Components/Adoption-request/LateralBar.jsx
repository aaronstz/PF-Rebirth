import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import avatar from "../../../../../Assets/Messageboard/avatar.png"; warning
// import mascota from "../../../../../Assets/Messageboard/pet.png"; warning
import { getChat, saveAdoptionId } from "../../../../../Redux/Actions";
import "./LateralBar.css";
import { getMessage } from "../../../../../Redux/Actions";
// import { useNavigate } from "react-router-dom"; warning

export default function LateralBar() {
  let mail = "";
  const adoptChat = useSelector((state) => state.adoptionChat);
  const dispatch = useDispatch();
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);

  if(infoStorage) mail = user.mail;

  useEffect(() => {
    dispatch(getChat(mail));
  }, [dispatch, mail]);



  function handleClick(adoptionId) {
    dispatch(getMessage(adoptionId));
    dispatch(saveAdoptionId(adoptionId));
  }

  return (
    <>

      {adoptChat && adoptChat.map((adChat) => {

        return (
          <div
            onClick={() => handleClick(adChat.id)}
            className="container-lateral-bar"
          >
            <div>
              <div className="avatar-pet-lateral-bar">
                <div className="avatar-lateral-bar">
                  <img
                    src={
                      adChat.adopter.mail === mail
                        ? adChat.owner.image
                        : adChat.adopter.image
                    }
                    alt="null"
                  />
                </div>
                <div className="pet-lateral-bar">
                  <img src={adChat.pet.image} alt="" />
                </div>
              </div>
            </div>
            <div className="name-adoption-text-lb">
              <div className="name-lateral-bar">
                {" "}
                {adChat.userMail === mail
                  ? adChat.owner.name
                  : adChat.adopter.name}
              </div>
              <div className="adoption-lateral-bar">
                {adChat.id.slice(0,5)}
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
