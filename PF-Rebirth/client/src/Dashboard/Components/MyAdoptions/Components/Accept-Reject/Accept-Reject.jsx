import React, { useEffect, useState } from "react";
import "./Accept-Reject.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../../../Assets/fotoPet1.png";
import { useSelector } from "react-redux";
const AcceptReject = () => {
  const adoptChat = useSelector((state) => state.adoptionChat);
  const adoptionId = useSelector((state) => state.adoptionId);
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  const mail = user.mail;

  console.log();

  return (
    <>
      {adoptChat
        .filter((adChat) => adChat.id === adoptionId)
        .map((datos) => {
          if (datos.owner.mail === mail) {
            return (
              <div className="mainDashCont">
                <div className="AdoptContainer">
                  <div>
                    <div class="imgFav">
                      <img
                        src={datos.adopter.image}
                        alt="Adopter"
                        class="img"
                      />
                    </div>
                  </div>
                  <div>
                    <span>
                      Name: {datos.adopter.name} {datos.adopter.lastName}
                    </span>
                    <br />
                    <span>Email: {datos.adopter.mail}</span>
                    <br />
                    <span>Gender: {datos.gender}</span>
                    <br />
                    <span>Address: {datos.address}</span>
                    <br />
                    <span>Other pets: {datos.otherpets}</span>
                    <br />
                    <span>Phone: {datos.phone}</span>
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
              </div>
            );
          } else {
            return (
              <div className="mainDashCont">
                <div className="AdoptContainer">
                  <div>
                    <div class="imgFav">
                      <img src={datos.pet.image} alt="Pet" class="img" />
                    </div>
                  </div>
                  <div>
                    <span>Name: {datos.pet.name}</span>
                    <br />
                    <span>Race: {datos.pet.race}</span>
                    <br />
                    <span>Age: {datos.pet.age} years</span>
                    <br />
                    <span>Location: {datos.pet.location}</span>
                    <br />
                    <span>Gender: {datos.pet.gender}</span>
                    <br />
                    <span>Size: {datos.pet.size}</span>
                    <br />
                    <span>Description: {datos.pet.description}</span>
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
              </div>
            );
          }
        })}
    </>
  );
};

export default AcceptReject;
