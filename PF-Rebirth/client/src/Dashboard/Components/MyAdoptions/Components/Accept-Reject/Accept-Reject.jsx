import React from "react";
import "./Accept-Reject.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdoption, deletePost,getChat} from "../../../../../Redux/Actions";
import SwalertCancel from "../SweetAlert/SweetAlertCancel";
import Swalert from "../SweetAlert/SweetAlert";
 
const AcceptReject = () => {

  const dispatch = useDispatch();
  let mail=""
  const adoptChat = useSelector((state) => state.adoptionChat);
  const adoptionId = useSelector((state) => state.adoptionId);
  const infoStorage = localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  if (infoStorage) mail = user.mail;

  function handleClick(adoptionId, e) {
    dispatch(deleteAdoption(adoptionId));
    setTimeout(() => dispatch(getChat(mail)), 200);
  }
  
  const idPet = adoptChat.filter(
    (adChat) => 
    adChat.id === adoptionId)
    .map((datos) => 
    datos.petId
  )
  
  function handleDeletePost(petId) {
     window.open("/feedback?pet="+petId, "_self")
  }

  return (
    <>
      {adoptChat
        .filter((adChat) => adChat.id === adoptionId)
        .map((datos) => {
         
          if (datos.owner.mail === mail) {
        
            return (
              <div className="mainDashContACC">
                <div className="AdoptContainer">
                  <div>
                    <div className="imgFav">
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
                    <br />
                    <span>Comments:{datos.comments}</span>
                  </div>
                </div>
                <div className="btnRowAdopt">
                  <button
                    className="MAdoCancbutton"
                    onClick={() =>
                      SwalertCancel(datos.pet.name, handleClick, datos.id)
                    }
                    // onClick={() => handleClick(datos.id)}
                  >
                    <span>Reject</span>
                  </button>
                  <button onClick={() =>{Swalert(datos.pet.name,handleDeletePost)}} class="MAdoptbutton">
                    <span>Accept</span>
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="mainDashContACC">
                <div className="AdoptContainer">
                  <div>
                    <div class="imgFav">
                      <img src={datos.pet.image} alt="Pet" class="img" />
                    </div>
                  </div>
                  <div className="datos">
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
                  </div>
                  <div className="description">
                    <span>Description: {datos.pet.description}</span>
                  </div>
                  <div className="btnRowAdopt">
                    <button
                      className="MAdoCanbutton"
                      onClick={() =>
                        SwalertCancel(datos.pet.name, handleClick, datos.id)
                      }
                    >
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default AcceptReject;
