import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const Paginations = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg" className="justify-content-center" variant="">
        {items}
      </Pagination>
    </div>
  );
};

export default Paginations;
