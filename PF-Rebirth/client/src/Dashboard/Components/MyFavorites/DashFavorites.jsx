import React, { useEffect } from "react";
import "./DashFavorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavs, getAllPets, getFavs } from "../../../Redux/Actions";
import NavBar from "../../../Components/Navbar/Navbar.jsx"


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
  console.log('filterFavs :>> ', filterFavs);
  const mail = user && user.mail? user.mail : user.email
 
 
  useEffect(() =>{
    dispatch(getAllPets())
    dispatch(getFavs(user.mail || user.email))
  }, [])

  function handleDeleteFav(id){
    dispatch(deleteFavs(mail, id))
}

filterFavs.map(i=>  console.log('i.image', i.image))

  return (
    <>
    <NavBar/>
     <div className="mainDashCont">
      <div className="conTitulo">
        <h3>My favorite pets</h3>
      </div>
      { filterFavs&& 
          filterFavs?.map((e) => {
           return(
            <div key={Math.random()} className="favContainer">
        <div className="favcardLeftPhoto">
            <div class="imgFav">
            <div>
            <button className="a-btnFavElim" onClick={()=>handleDeleteFav(e.id)}/>
            </div>
            { e.image&&<img src={e.image} alt="Pet" class="img" />}
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


           