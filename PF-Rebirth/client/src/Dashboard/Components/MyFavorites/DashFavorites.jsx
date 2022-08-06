import React, { useEffect, useState } from "react";
import "./DashFavorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavs, getAllPets, getFavs } from "../../../Redux/Actions";
// import NavBar from "../../../Dashboard/Components/Dash-NavBar/Dash-NavBar.jsx";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

console.log('favorites', favorites)

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

  return (
    <>
      {/* <NavBar /> */}
      <div className="mainDashCont">
        {isLoading || favorites.length === 0 ? null : (
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
    </>
  );
}
