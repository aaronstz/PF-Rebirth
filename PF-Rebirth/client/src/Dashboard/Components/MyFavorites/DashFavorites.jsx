import React, { useEffect, useState } from "react";
import "./DashFavorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavs, getAllPets, getFavs } from "../../../Redux/Actions";
import { Link } from "react-router-dom";
import DashNavBar from "../Dash-NavBar/Dash-NavBar";
import Footer from "../../../Components/Footer/Footer";
// import swal from "sweetalert";

export default function DashFavorites() {
  const [isLoading, setIsloading] = useState(true);
  const favorites = useSelector((s) => s.favorite);
  const pets = useSelector((s) => s.allPets);
  const infoUser = localStorage.getItem("user");
  const user = JSON.parse(infoUser);
  const dispatch = useDispatch();
  const filterFavs = favorites?.map((p) => {
    let pet = pets.filter((e) => e.id === p);
    return pet[0];
  });
  const mail = user && user.mail ? user.mail : user.email;

  useEffect(() => {
    dispatch(getAllPets());
    dispatch(getFavs(user.mail || user.email));
  }, []);

  setTimeout(() => {
    setIsloading(false);
  }, 300);

  function handleDeleteFav(id) {
    dispatch(deleteFavs(mail, id));
  }

  console.log('favs:>>' + favorites)

  return (
    <>
      <DashNavBar/>

      <div className="mainDashCont">
        {favorites.length === 0 ? 
        (
          <div className="noFavsTitle">
          <h3>You can add favorites to your favorites list by clicking on the heart icon</h3>
          <div class="favContainer">
          <Link to={'/home'}><span class ="btn btn-secondary">Go see some pets!</span></Link>
          </div>
          </div>
        ) :
          isLoading === true ? (
            <div class="spinner">
            <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            </div>
          ) :
        (
          <>
            <div className="conTitulo info">
              <h3>MY FAVORITE PETS</h3>
            </div>
            <div className="infoPets">
              {filterFavs?.map((e) => {
                return (
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
        )}
      </div>
      <Footer/>
    </>
  );
}
