import React from "react";
import "./Accept-Reject.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../../../Assets/fotoPet1.png";
import { getChat } from "../../../../../Redux/Actions";

const AcceptReject = (adoptionId) => {
  const adoptChat = useSelector((state) => state.adoptionChat);
  const dispatch = useDispatch();
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  const mail = user.mail;
  console.log(adoptChat);

  useEffect(() => {
    dispatch(getChat(mail));
  }, [dispatch]);

  return (
    <>
      {adoptChat.map((adChat) => {
        <div className="mainDashCont">
          <div className="AdoptContainer">
            <div>
              <div class="imgFav">
                <img src={adChat.pet.image} alt="Pet" class="img" />
              </div>
            </div>
            <div>
              <span>Lolita</span>
              <br />
              <span>Border collie</span>
              <br />
              <span>3&nbsp;years</span>
              <br />
              <span>Mexico City</span>
            </div>
            <div>
              <span>Female</span>
              <br />
              <span>Medium</span>
              <br />
              <span>3.4&nbsp;KG</span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem
              </span>
            </div>
          </div>
          <div className="btnRowAdopt">
            <button class="MAdoCancbutton">
              <span>Reject</span>
            </button>
            <button class="MAdoptbutton">
              <span>Accept</span>
            </button>
          </div>
        </div>;
      })}
    </>
  );
};

export default AcceptReject;
