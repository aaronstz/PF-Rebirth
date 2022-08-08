import "./Card.css";
import { Link } from "react-router-dom";
import female from "../../Assets/female-ico-w.png";
import male from "../../Assets/male-icon-w.png";
import { useDispatch, useSelector } from "react-redux";
import {addFavs, deleteFavs, updatePetsViews} from "../../Redux/Actions/index.js"
import { useEffect, useState } from "react";



function Cards({image,name,breed,age,gender,size,description,id,location,views,userMail}){
  const dispatch = useDispatch()
  const [ favFilters , setFavFilters] = useState([])
  const favoritos = useSelector(state => state.favorite)
  let favFilter = favoritos.length > 0 ? favoritos.filter((f) => f == id) : null
  
  let user = null;
  if(localStorage.user){
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }
  
  if(user){
    var mail = user.mail? user.mail : user.email
  }
  useEffect(() => {
   setFavFilters(favFilter)
  },[] );

  


  function handleFavoriteHome(){
    dispatch(addFavs(mail, id))
  
  }
  function handleDeleteFavHome(){
    dispatch(deleteFavs(mail, id))
  
}

  return (
    <div className="lcard">
      {            
             user && (mail === userMail) ? null :   
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
            <span className="icoSize"></span>
            {size}
          </div>
          <div className="weigth">
            <span className="icoWeigth"></span>
            3.4 kg
          </div>
        </div>
        <div className="attributes">{description}</div>
      </div>
      <Link to={`/home/${id}`} className="lbutton" onClick={(e)=> {dispatch(updatePetsViews(id))}}>
        <div>
          <span>More info</span>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
