import React from "react";
import "./Pagination.css";

const Paginations = ({ petsPerPage, pets, pagination, currentPage }) => {
  const numberPgs = [];

  for (let i = 1; i <= Math.ceil(pets / petsPerPage); i++) {
    numberPgs.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {numberPgs.map((e) => (
          <ul className="pages">
            <li key={e} className={currentPage === e ? "liactive" : ""}>
              <span onClick={() => pagination(e)}>{e}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Paginations;
