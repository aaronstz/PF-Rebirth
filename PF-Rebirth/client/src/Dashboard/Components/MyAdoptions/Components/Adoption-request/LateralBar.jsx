import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../../../../Assets/Messageboard/avatar.png";
import mascota from "../../../../../Assets/Messageboard/pet.png";
import { getChat, saveAdoptionId } from "../../../../../Redux/Actions";
import "./LateralBar.css";
import { getMessage } from "../../../../../Redux/Actions";

export default function LateralBar() {
  const adoptChat = useSelector((state) => state.adoptionChat);
  const dispatch = useDispatch();
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  const mail = user.mail;
  console.log(user.mail, mail);
  console.log(adoptChat);
  useEffect(() => {
    dispatch(getChat(mail));
  }, [dispatch]);

  function handleClick(adoptionId) {
    dispatch(getMessage(adoptionId));
    dispatch(saveAdoptionId(adoptionId));
  }

  return (
    <>
      {adoptChat.map((adChat) => {
        return (
          <div
            onClick={() => handleClick(adChat.id)}
            className="container-lateral-bar"
          >
            <div>
              <div className="avatar-pet-lateral-bar">
                <img
                  className="avatar-lateral-bar"
                  src={
                    adChat.adopter.mail === mail
                      ? adChat.adopter.image
                      : adChat.owner.image
                  }
                  alt=""
                />
                <img
                  className="pet-lateral-bar"
                  src={adChat.pet.image}
                  alt=""
                />
              </div>
            </div>
            <div className="name-adoption-text-lb">
              {console.log(adChat)}
              <div className="name-lateral-bar">
                {" "}
                {adChat.userMail === mail
                  ? adChat.owner.name
                  : adChat.adopter.name}
              </div>
              <div className="adoption-lateral-bar">
                {" "}
                Adoption
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
