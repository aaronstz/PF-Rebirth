import React from "react";
import "./Pagination.css";
import arrowRightLight from "../../Assets/arrowRightLight.png";
import arrowLeftLight from "../../Assets/arrowLeftLight.png";

const Paginations = ({
  numberPage,
  totalPages,
  previousPage,
  handlePage,
  pets,
}) => {
  return (
    <>
      { pets&&pets.length===0 ? null :
        <div className="pagination">
          {previousPage < 0 ? (
            <div className="pagesNone" id="previousPage"></div>
          ) : (
            <div onClick={(e) => handlePage(e)} className="pages">
              <img
                src={arrowLeftLight}
                alt="Prev"
                className="arrowPages"
                id="previousPage"
              />
            </div>
          )}
          {numberPage + 1 === totalPages ? (
            <div className="pagesNone" />
          ) : (
            <div onClick={(e) => handlePage(e)} className="pages">
              <img
                src={arrowRightLight}
                alt="Next"
                className="arrowPages"
                id="nextPage"
              />
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Paginations;
