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
<<<<<<< HEAD
import { getPetNames, getPetFilters } from "../Redux/Actions/index.js";
=======

import { getPets, getPetNames, getPetFilters } from "../Redux/Actions/index.js";
>>>>>>> 1f7baed309f80139992649c13d42a02f044d32d6
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



function Home() {


function Home() {
  const petType = useLocation().search?.replace("?type=", "");

  const dispatch = useDispatch();
  const pets = useSelector((store) => store.pets);
  // const loading = useSelector(store => store.loading)

  //Paginado//
  const [refresh, setRefresh] = useState(1);
  const [page, setPage] = useState(1);
  const [cantPets, setCantPets] = useState(12);
  const lastPet = page * cantPets;
  const firstPet = lastPet - cantPets;
  const petsPage = pets?.slice(firstPet, lastPet);
  const cantPages = Math.ceil(pets.length / cantPets);

  const paginado = (pageNum) => {
    setPage(pageNum);
  };

  useEffect(() => {
    dispatch(getPetFilters(petType));
  }, [dispatch, petType]);


  return (
    <div>{console.log(`tipo mascota -${type}-`)} 
      <Navbar />
      <Container>
        <Header />
        <FiltersBar />
        <div className="boxWrap">
          {refresh &&
            petsPage.map((p, i) => {
              return (
                <Cards
                  image={p.image}
                  name={p.name}
                  breed={p.race}
                  age={p.age}
                  gender={p.gender}
                  size={p.size}
                  description={p.description}
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
}
export default Home;
