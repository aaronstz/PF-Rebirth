import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FiltersBar() {
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
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="AGE"
        className="ms-2"
      >
        <Dropdown.Item href="#/action-1" active>
          1 year
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">2 years</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3 years</Dropdown.Item>
      </DropdownButton>

      <InputGroup className="ms-2 w-50">
        <Form.Control
          placeholder="Search by name"
          aria-label="Search by name"
          aria-describedby="basic-addon2"
        />
        <Button variant="pink" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <DropdownButton
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SEX"
        className="ms-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Male
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SIZE"
        className="ms-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Tiny
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Small</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Medium</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Big</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default FiltersBar;
