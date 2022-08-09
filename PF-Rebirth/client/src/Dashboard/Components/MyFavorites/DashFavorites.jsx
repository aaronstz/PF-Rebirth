import React, { useEffect, useState } from "react";
import "./DashFavorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavs, getAllPets, getFavs } from "../../../Redux/Actions";
import NavBar from "../../../Dashboard/Components/Dash-NavBar/Dash-NavBar.jsx";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useUserFavoritesPets, useFavoritesPetsDetails } from '../../../Tools/customHooks.js';

export default function DashFavorites(){


  const infoUser= localStorage.getItem("user")
  const user = JSON.parse(infoUser)
  const dispatch = useDispatch()

  const mail = user.mail

  const [ filters, setFilters ] = useState({ mail : mail})
  const { data, isLoading }  = useUserFavoritesPets(filters)
  
  const filterFavs = data&&data.data;
  // console.log('data :>> ', data&&data.data);
  // const usePetsDetails = (array) => {
  //   return { data } = useFavoritesPetsDetails(pId)
  // }
  // const petsDetails = filterFavs&&filterFavs?.map(p => {
  //   const { data } =   useFavoritesPetsDetails()
  //   return 
  // })


  console.log('filterFavs.length :>> ', filterFavs&&filterFavs);

  // if(filterFavs&&!filterFavs.length) swal("No favorites", "Looks like you don't have favorites yet", "info")

  function handleDeleteFav(id){
    dispatch(deleteFavs(mail, id))
  }

  // console.log('favs:>>' + favorites)

  return (
    <>
    <NavBar/>
     <div className="mainDashCont">
      {
        isLoading
          ? null
          : 
            <>
                <div className="conTitulo info">
                  <h3>MY FAVORITES PETS</h3>
                </div>
                <div className="infoPets">
                  { filterFavs&&filterFavs?.map((e) => {
                      return(
                        <div key={Math.random()} className="favContainer">
                    <div className="favcardLeftPhoto">
                      <Link to={"/home/" + e.id}>
                        <div className="imgFavor">
                          {e.image && (
                            <img src={e.image} alt="Pet" className="img" />
                          )}
                        </div>
                      </Link>
                      <div>
                        <button
                          className="a-btnFavElim"
                          onClick={() => handleDeleteFav(e.id)}
                        />
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
                      <span>{e.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
            }
      </div>
    </>
  );
}
