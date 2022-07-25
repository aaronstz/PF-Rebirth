import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  filterBySex,
  filterBySize,
  getPets,
  orderByAge,
} from "../../Redux/Actions";
import { useDispatch } from "react-redux";

function FiltersBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderByAge());
    dispatch(filterBySex());
    dispatch(filterBySize());
  }, [dispatch]);

  function handleOrderByAge(e) {
    dispatch(orderByAge(e));
  }

  function handleFilterBySex(e) {
    dispatch(filterBySex(e));
  }
  function handleFilterBySize(e) {
    dispatch(filterBySize(e));
  }

  return (
    <div className="filtBar">
      <DropdownButton
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="LOCATION"
        className="ms-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Buenos Aires
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">San José</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        onSelect={(e) => {
          handleOrderByAge(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="AGE"
        className="ms-2"
      >
        <Dropdown.Item eventKey="young">young</Dropdown.Item>
        <Dropdown.Item eventKey="old">old</Dropdown.Item>
      </DropdownButton>

      <InputGroup className="ms-2 w-50">
        <Form.Control
          placeholder="Search by name"
          aria-label="Search by name"
          aria-describedby="basic-addon2"
        />
        <Button className="btn-pink">Search</Button>
      </InputGroup>

      <DropdownButton
        onSelect={(e) => {
          handleFilterBySex(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SEX"
        className="ms-2"
      >
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
        <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        onSelect={(e) => {
          handleFilterBySize(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SIZE"
        className="ms-2"
      >
        <Dropdown.Item eventKey="Any">Any</Dropdown.Item>
        <Dropdown.Item eventKey="small">Small</Dropdown.Item>
        <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
        <Dropdown.Item eventKey="big">Big</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default FiltersBar;
