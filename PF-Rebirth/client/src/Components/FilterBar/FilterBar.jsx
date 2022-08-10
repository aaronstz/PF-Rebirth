import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import FilterbarSelect from "../FilterBarSelectedButton/FilterBarSelectedButton";
import Button from "react-bootstrap/esm/Button";

function FiltersBar({
  filters,
  setFilters,
  handleFilterBySex,
  handleFilterBySize,
  handleFilterByLocation,
  handleOrderByAge,
  handleSearchName,
  handleChange,
  handleDeleteFilters,
  handleOrderByTime
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
          <Dropdown.Item eventKey="ASC">young</Dropdown.Item>
          <Dropdown.Item eventKey="DESC">old</Dropdown.Item>
        </DropdownButton>

        <Form className="ms-2 w-10" onSubmit={handleSearchName}>
          <Form.Group className="mb-3 cajaDeTexto" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Search by name"
              className="formInputStyle"
              autoComplete="off"
              onChange={handleChange}
            />
          </Form.Group>
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

        <div>
          <Button className="btn-pink" onClick={handleDeleteFilters}>
            Borrar filtros
          </Button>
        </div>
      </div>
      <FilterbarSelect filters={filters} setFilters={setFilters}/>
    </React.Fragment>
  );
}

export default FiltersBar;
