import React from "react";
import "./Pagination.css";

const Paginations = () => {
  return (
    <div>
      <div className="pagination">
        <ul className="previous">
          <li>
            <a href=" ">Prev</a>
          </li>
        </ul>
        <ul className="pages">
          <li>
            <a href=" ">1</a>
          </li>
          <li>
            <a href=" ">2</a>
          </li>
          <li>
            <a href=" ">3</a>
          </li>
          <li>
            <a href=" ">4</a>
          </li>
          <li>
            <a href=" ">5</a>
          </li>
          <li>
            <a href=" ">6</a>
          </li>
          <li>
            <a href=" ">7</a>
          </li>
          <li>
            <a href=" ">8</a>
          </li>
          <li>
            <a href=" ">9</a>
          </li>
          <li>
            <a href=" ">10</a>
          </li>
        </ul>
        <ul className="next">
          <li>
            <a href=" ">Next</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paginations;
