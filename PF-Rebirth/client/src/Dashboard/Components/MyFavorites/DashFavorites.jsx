import React, { useState } from "react"; // warning->{useEffect, useRef,} 
import "./DashFavorites.css";
import { useDispatch } from "react-redux";
import {
  deleteFavs,
} from "../../../Redux/Actions";
import {
  useUserFavoritesPets,
  useFavoritesPetsDetails,
} from "../../../Tools/customHooks.js";
import { Link } from "react-router-dom";
// import DashNavBar from "../Dash-NavBar/Dash-NavBar"; warning
import Navbar from "../../../Components/Navbar/Navbar";
import NotFound from '../../../Components/NotFound/NotFound'

export default function DashFavorites() {
  const infoUser = localStorage.getItem("user");
  const user = JSON.parse(infoUser);
  const dispatch = useDispatch();

  const mail = user.mail;

  const [filters, setFilters] = useState({ mail: mail });

  const { data, isLoading } = useUserFavoritesPets(filters);

  let filterFavs = data && data.data;
  let arrayDetails = useFavoritesPetsDetails({ id: filterFavs && filterFavs });

  let favoritos = arrayDetails.data;

  function handleDeleteFav(id) {
    dispatch(deleteFavs(mail, id));
    setFilters({
      ...filters,
      mail: mail,
    });
    window.history.go();
  }

  return (
    <>
      <Navbar />
      <div className="mainDashCont">
        {!favoritos ? (
          <div className="noFavsTitle">
            <NotFound/>
            <h3>
              You can add favorites to your favorites list by clicking on the
              heart icon
            </h3>
            <div>
              <Link to={"/home"}>
                <span className="btn btn-secondary">Go see some pets!</span>
              </Link>
            </div>
          </div>
        ) : isLoading === true ? (
          <div className="spinner">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="conTitulo info">
              <h3>MY FAVORITE PETS</h3>
            </div>
            <div className="infoPets">
              {favoritos &&
                favoritos?.map(({ data }) => {
                  return (
                    <div key={Math.random()} className="favContainer">
                      <div className="favcardLeftPhoto">
                        <Link to={"/home/" + data.id}>
                          <div className="imgFavor">
                            {data.image && (
                              <img src={data.image} alt="Pet" className="img" />
                            )}
                          </div>
                        </Link>
                        <div>
                          <button
                            className="a-btnFavElim"
                            onClick={() => handleDeleteFav(data.id)}
                          />
                        </div>
                      </div>
                      <div className="favcardLeft">
                        <span>{data.name}</span>
                        <span>{data.breed}</span>
                        <span>{data.age}&nbsp;years</span>
                        <span>{data.location}</span>
                      </div>
                      <div className="favcardCenter">
                        <span>{data.gender}</span>
                        <span>{data.size}</span>
                      </div>
                      <div className="favcardRight">
                        <span>{data.description}</span>
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
