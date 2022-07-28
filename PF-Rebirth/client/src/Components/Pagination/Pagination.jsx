import React from "react";
import "./Pagination.css";

const Paginations = ({cantPets, pets, paginado, actual}) => {
  const pageNumbers = [];


  for(let i = 1; i<= Math.ceil(pets / cantPets); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <div className="pagination">

        
        {/* {
          pageNumbers.includes(actual -1 ) &&
          <ul className="previous">
            <li>
            <span onClick={()=> paginado(actual - 1 )} >Prev</span>
            </li>
          </ul>
        } */}

        { pageNumbers && pageNumbers.map(e=>(
          <ul className="next" key={Math.random()} >
            <li>
            <span onClick={()=> paginado(e)}>{e}</span>
            </li>
          </ul>
        ))
        }
        
        {/* {
          pageNumbers.includes(actual + 1) &&
          <ul className="next">
            <li>
          <span onClick={()=> paginado(actual + 1)}>{actual + 1}</span>
            </li>
          <li>
          <span onClick={()=> paginado(actual + 1)}>Next</span>
          </li>
          </ul>



        } */}



        {/* <ul className="previous">
          <li>
            <a href=" ">Prev</a>
          </li>
        </ul> */}
        {/* [<ul className="pages">
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
        </ul>] */}
      </div>
    </div>
  );
};

export default Paginations;
