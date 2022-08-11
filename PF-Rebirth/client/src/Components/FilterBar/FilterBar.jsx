import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import FilterbarSelect from "../FilterBarSelectedButton/FilterBarSelectedButton";
import Button from "react-bootstrap/esm/Button";

function FiltersBar({
  name,
  filters,
  setFilters,
  handleFilterBySex,
  handleFilterBySize,
  handleFilterByLocation,
  handleOrderByAge,
  handleSearchName,
  handleChange,
  handleDeleteFilters,
}) {
  const locations = useSelector((state) => state.location);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
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
          </div>
          <div className="col col-lg-2">
            <DropdownButton
              onSelect={(e) => {
                handleOrderByAge(e);
              }}
              id="dropdown-button-light"
              variant="light"
              title="AGE"
              className="ms-2"
            >
              <Dropdown.Item eventKey="ASC">Young</Dropdown.Item>
              <Dropdown.Item eventKey="DESC">Old</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-md-auto">
            <Form className="ms-2 w-10" onSubmit={handleSearchName}>
              <Form.Group
                className="mb-3 cajaDeTexto"
                controlId="formBasicName"
              >
                <Form.Control
                  type="text"
                  placeholder="Search by name"
                  className="formInputStyle"
                  autoComplete="off"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="col col-lg-2">
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
          </div>
          <div className="col col-lg-2">
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
          <div className="col-md-auto">
            <Button className="btn-pink" onClick={handleDeleteFilters}>
              Clear
            </Button>
          </div>
          <div className="row mt-3 mb-3">
            <FilterbarSelect filters={filters} setFilters={setFilters} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FiltersBar;
