/* eslint-disable react-hooks/exhaustive-deps */
import "./Card.css";
import { Link } from "react-router-dom";
import female from "../../Assets/female-ico-w.png";
import male from "../../Assets/male-icon-w.png";
import cat from "../../Assets/ico-cat-white.png"
import dog from "../../Assets/ico-dog-white.png"
import { useDispatch, useSelector } from "react-redux";
import {addFavs, deleteFavs,  deletePet, updatePetsViews} from "../../Redux/Actions/index.js"
import { useEffect, useState } from "react";
import swal from "sweetalert";



function Cards({image,name,breed,type,age,gender,size,description,id,location,views,active,userMail}){
  const dispatch = useDispatch()
  const [  , setFavFilters] = useState([]) //warning->elimine favFilters
  const favoritos = useSelector(state => state.favorite)
  let favFilter = favoritos.length > 0 ? favoritos.filter((f) => f === id) : null
  
  let user = null;
  if(localStorage.user){
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  if(user){
    var mail = user.mail
  }

  useEffect(() => {
    setFavFilters(favFilter)
  },[] ); //warning-> eliminar favFilter si no funciona

  function handleFavoriteHome(e){
    dispatch(addFavs(mail, id))
  
  }
  function handleDeleteFavHome(){
    dispatch(deleteFavs(mail, id))  
}

function handleDelete(){
  swal({
    title: "You are about to delete a publication!",
    text: "Are you sure?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deletePet(id))
      swal("The post was deleted!", {
        icon: "success",
      });
      window.history.go() 
    } else {
      swal("Uff! that was close!");
    }
  })
}

  return (
   <>
   

   
    {
      active === false ? null : 
  
    <div className="lcard">
     
      
      {        
             user && user.isAdmin === true ? <button className="btnEliminarPets" onClick={handleDelete}></button> :    
             user && (mail === userMail)? null : 
             !user ? null :  
             favFilter && favFilter.length !==0 ?
             <> <button className="btnFavEliminarHome" onClick={handleDeleteFavHome}/> </> : 
             <> <button className="btnFavHome" onClick={handleFavoriteHome}/> </> 
       }
      
      <img src={image} alt="foto" />
      <div className="txtCont">
        <div className="txtLeft">
          <div className="title">{name}</div>
          <div className="breed">{breed}</div>
          <div className="age">{age} years</div>
          <div className="location">{location}</div>
        </div>
        <div className="txtRight">
          <div className="views">
            <span className="icoEye"></span>
             {views}
          </div>
          
          <div className="sex">
            <span className="icoSex">
              {gender === "male" ? (
                <img src={male} alt="gender" />
              ) : (
                <img src={female} alt="gender" />
              )}
            </span>
            <span>{gender}</span>
          </div>

          <div className="size">
            <span className="icoSize">
            {type === "cat" ? (
              <img src={cat} alt="type" />
              ) : (
                <img src={dog} alt="type" />
                )}
              </span>
            <span>{size}</span>
          </div>
        </div>


        <div className="attributes">{description}</div>
      </div>
      <Link to={`/home/${id}`} className="lbutton" onClick={(e)=> {dispatch(updatePetsViews(id))}}>
        <div>
          <span>More info</span>
        </div>
      </Link>
  </div> }
  </>

);
}

export default Cards;
