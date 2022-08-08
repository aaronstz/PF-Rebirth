import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  getLocation,
  getPetNames,
  paginateData,
  pruebasDeFiltrado,
  saveName,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import FilterbarSelect from "../FilterBarSelectedButton/FilterBarSelectedButton";
import { Link, useLocation, useParams } from "react-router-dom";

function FiltersBar({
  filters,
  searchName,
  handleFilterBySex,
  handleFilterBySize,
  handleFilterByLocation,
  handleOrderByAge,
  handleSearchName,
  handleChange,
  valueName
}) {
  const locations = useSelector((state) => state.location);

  return (
    <React.Fragment>
      <div className="filtBar">
        <DropdownButton
          onSelect={(e) => {
            handleFilterByLocation(e);
          }}
          id="dropdown-button-light"
          variant="light"
          title="LOCATION"
          className="ms-2"
        >
          <Dropdown.Item eventKey={"All"}>All</Dropdown.Item>
          {locations &&
            locations.map((location) => (
              <Dropdown.Item eventKey={location} key={Math.random()}>
                {" "}
                {location}
              </Dropdown.Item>
            ))}
        </DropdownButton>

        <DropdownButton
          onSelect={(e) => {
            handleOrderByAge(e);
          }}
          id="dropdown-button-light"
          variant="light"
          title="AGE"
          className="ms-2"
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="young">young</Dropdown.Item>
          <Dropdown.Item eventKey="old">old</Dropdown.Item>
        </DropdownButton>

        <Form className="ms-2 w-50" onSubmit={handleSearchName}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Search by name"
              className="formInputStyle"
              autoComplete="off"
              onChange={handleChange}
              // value={valueName}
            />
          </Form.Group>
          {/* <Form.Control
            placeholder="Search by name"
            aria-label="Search by name"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearchName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEnter(searchName)}
            value={searchName}
          /> */}
          {/* <Button
            type="submit"
            className="btn-pink"
            disabled={!searchName ? true : false}
            onClick={(e) => handleSearchName(e)}
          >
            <Link to={`/home/name/?name=${searchName}`}> Search </Link>
          </Button> */}
        </Form>

        <DropdownButton
          onSelect={(e) => {
            handleFilterBySex(e);
          }}
          id="dropdown-button-light"
          variant="light"
          title="GENDER"
          className="ms-2"
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="male">Male</Dropdown.Item>
          <Dropdown.Item eventKey="female">Female</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          onSelect={(e) => {
            handleFilterBySize(e);
          }}
          id="dropdown-button-light"
          variant="light"
          title="SIZE"
          className="ms-2"
        >
          <Dropdown.Item eventKey="Any">Any</Dropdown.Item>
          <Dropdown.Item eventKey="small">Small</Dropdown.Item>
          <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
          <Dropdown.Item eventKey="big">Big</Dropdown.Item>
        </DropdownButton>
      </div>
      <FilterbarSelect filters={filters}/>
    </React.Fragment>
  );
}

export default FiltersBar;
