import React, { useEffect } from "react";
import "./HistoryAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import { adoptinHistoryAdmin } from "../../Redux/Actions";
import DashNavBar from "../../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import NotFound from "../NotFound/NotFound";


export default function HistoryAdmin() {
  const dispatch = useDispatch();
  const history = useSelector(state => state.historyAdmin)
 
  useEffect(() => {
    dispatch(adoptinHistoryAdmin());
  }, [dispatch]);

  return (
    <>
      <DashNavBar/>
      <div className="DashcontainerMain">
        <div className="mainDashContAdm">
          {!history ? (
            <div className="noAdmTitle">
              <NotFound/>
            </div>
          ) : (
            <>
              <div className="conTituloAdm infoAd">
                <h3>HISTORY</h3>
              </div>
              <div className="infoAdm">
                {history &&
                  history?.map((u) => {
                    return (
                      <div key={Math.random()} className="admContainer">
                          <div className="admcardLeftPhoto">
                            <div className="imgFavorAdm">
                              {u.image && (
                                  <img src={u.image} alt="ADM" className="img" />
                                  )}
                                  </div>
                              </div>
                        <div className="admcardLeft">
                          <span>{u.name}</span>
                          <span>{u.breed}</span>
                          <span>{u.age}&nbsp;years</span>
                          <span>{u.location}</span>
                        </div>
                        <div className="admcardCenter">
                          <span>{u.gender}</span>
                          <span>{u.size}</span>
                        </div>
                        <div className="admcardRight">
                          <span>{u.description}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
 }