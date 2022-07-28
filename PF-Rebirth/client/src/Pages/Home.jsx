import React from "react";
import Container from "react-bootstrap/Container";
import Cards from "../Components/Card/Card";
import Paginations from "../Components/Pagination/Pagination";
import Navbar from "../Components/Navbar/Navbar";
import FiltersBar from "../Components/FilterBar/FilterBar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Testimonials from "../Components/Testimonials/Testimonials.jsx";
import "../index.css";

import {
  filterByLocation,
  filterBySex,
  filterBySize,
  fullFilterAge,
  fullFilterLocation,
  fullFilterSex,
  fullFilterSize,
  getPetFilters,
  orderByAge,
} from "../Redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const petType = useLocation().search?.replace("?type=", "");

  const dispatch = useDispatch();
  const pets = useSelector((store) => store.filteredPets);
  // const loading = useSelector(store => store.loading)

  //Paginado//
  const [refresh] = useState(1);
  const [page, setPage] = useState(1);
  const [cantPets] = useState(12);
  const lastPet = page * cantPets;
  const firstPet = lastPet - cantPets;
  const petsPage = pets?.slice(firstPet, lastPet);
  // const cantPages = Math.ceil(pets.length / cantPets);

  const paginado = (pageNum) => {
    setPage(pageNum);
  };

  useEffect(() => {
    dispatch(getPetFilters(petType));
  }, [dispatch, petType]);

  function handleFilterBySex(e) {
    dispatch(filterBySex(e));
    dispatch(fullFilterSex(e));
    setPage(1);
  }
  function handleFilterBySize(e) {
    dispatch(filterBySize(e));
    dispatch(fullFilterSize(e));
    setPage(1);
  }
  function handleFilterByLocation(e) {
    dispatch(filterByLocation(e));
    dispatch(fullFilterLocation(e));
    setPage(1);
  }
  function handleOrderByAge(e) {
    dispatch(orderByAge(e));
    dispatch(fullFilterAge(e));
    setPage(1);
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Header type={petType} />
        <FiltersBar
          handleFilterBySex={handleFilterBySex}
          handleFilterBySize={handleFilterBySize}
          handleFilterByLocation={handleFilterByLocation}
          handleOrderByAge={handleOrderByAge}
        />
        <div className="boxWrap">
          {refresh &&
            petsPage.map((p, i) => {
              return (
                <Cards
                  key={Math.random()}
                  image={p.image}
                  name={p.name}
                  breed={p.race}
                  age={p.age}
                  gender={p.gender}
                  size={p.size}
                  description={p.description}
                  id={p.id}
                  location={p.location}
                />
              );
            })}
        </div>
      </Container>
      <Paginations
        cantPets={cantPets}
        pets={pets.length}
        paginado={paginado}
        actual={page}
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
