import React from "react";
import exButton from "../../Assets/Filterbar/xbutton.svg";
import "./FilterBarSelectedButton.css";

export default function FilterbarSelect({ filters, setFilters }) {

  const { name, location, gender, size } = filters;

  function handleFilterByGender(e) {
    e.preventDefault();
    let newGender = gender.filter((g) => g !== e.target.id);
    setFilters({
      ...filters,
      gender: newGender,
    });
  }
  function handleFilterBySize(e) {
    e.preventDefault();
    let newSizes = size.filter((a) => a !== e.target.id);
    setFilters({
      ...filters,
      size: newSizes,
    });
  }
  function handleFilterByLocation(e) {
    e.preventDefault();
    let newLocations = location.filter((l) => l !== e.target.id);
    setFilters({
      ...filters,
      location: newLocations,
    });
  }

  function handleFilterByName(e) {
    e.preventDefault();
    setFilters({
      ...filters,
      name : ""
    })
    
  }

  return (
    <div className="filters-tabs">

      {name.length < 1 ? null : (
        <div>
          <div
            className="filter-tabs-item"
            onClick={(e) => {
              handleFilterByName(e);
            }}
          >
            <span>{name}</span>
            <img
              className="exbutton"
              src={exButton}
              alt="exbutton"
              id={name}
            />
          </div>
        </div>
      )}

      {location && location.length === 0 ? null : (
        <div>
          {location?.map((l) => {
            return (
              <div
                key={Math.random()}
                className="filter-tabs-item"
                onClick={(e) => {
                  handleFilterByLocation(e);
                }}
              >
                <span>{l}</span>
                <img
                  className="exbutton"
                  src={exButton}
                  alt="exbutton"
                  id={l}
                />
              </div>
            );
          })}
        </div>
      )}

      {size && size.length === 0 ? null : (
        <div>
          {size?.map((s) => {
            return (
              <div
                key={Math.random()}
                className="filter-tabs-item"
                onClick={(e) => {
                  handleFilterBySize(e);
                }}
              >
                <span>{s}</span>
                <img
                  className="exbutton"
                  src={exButton}
                  alt="exbutton"
                  id={s}
                />
              </div>
            );
          })}
        </div>
      )}

      {gender && gender.length === 0 ? null : (
        <div>
          {gender?.map((g) => {
            return (
              <div
                key={Math.random()}
                className="filter-tabs-item"
                onClick={(e) => {
                  handleFilterByGender(e);
                }}
              >
                <span>{g}</span>
                <img
                  className="exbutton"
                  src={exButton}
                  alt="exbutton"
                  id={g}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
