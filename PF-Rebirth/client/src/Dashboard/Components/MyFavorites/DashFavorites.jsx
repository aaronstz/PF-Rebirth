import React, { useEffect } from "react";
import "./DashFavorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavs, getAllPets, getFavs } from "../../../Redux/Actions";
import NavBar from "../../../Components/Navbar/Navbar.jsx"
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function DashFavorites(){
  const favorites= useSelector((s)=> s.favorite) 
  const pets = useSelector((s) => s.allPets)
  const infoUser= localStorage.getItem("user")
  const user = JSON.parse(infoUser)
  const dispatch = useDispatch()
  const filterFavs = favorites?.map((p) => {
    let pet = pets.filter((e) => e.id ==p)
    return pet[0]
  })

 
  const mail = user && user.mail? user.mail : user.email
 
 
  useEffect(() =>{
    console.log('favorites :>> ', favorites);
    dispatch(getAllPets())
    dispatch(getFavs(user.mail || user.email))
  }, [])



    // if(filterFavs && filterFavs.length === 0){
    //   swal("NO FAVORITES", "Looks like you don't have favorites pets yet", "error" )
    // }


  function handleDeleteFav(id){
    dispatch(deleteFavs(mail, id))
}

  return (
    <>
    
    <NavBar/>
     <div className="mainDashCont">
      <div className="conTitulo">
        <h3>My favorite pets</h3>
      </div>
      { filterFavs && 
          filterFavs?.map((e) => {
           return(
            <div key={Math.random()} className="favContainer">
        <div className="favcardLeftPhoto">
      <Link to={"/home/" + e.id} >
            <div class="imgFav">
            { e.image&&<img src={e.image} alt="Pet" class="img" />}
            </div>
        </Link>
            <div>
            <button className="a-btnFavElim" onClick={()=>handleDeleteFav(e.id)}/>
            </div>
        </div>
        <div className="favcardLeft">
          <span>{e.name}</span>
          <span>{e.breed}</span>
          <span>{e.age}&nbsp;years</span>
          <span>{e.location}</span>
        </div>
        <div className="favcardCenter">
          <span>{e.gender}</span>
          <span>{e.size}</span>
        </div>
        <div className="favcardRight">
          <span>
            {e.description}
        </span>
        </div>
      </div> 
           )
          })  
     }
    </div>
   
    </>
  );
};


           