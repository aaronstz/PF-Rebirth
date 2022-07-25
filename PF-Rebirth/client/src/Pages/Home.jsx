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
import { getPets, getTypes } from '../Redux/Actions/index.js'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function Home() {

  const dispatch = useDispatch();
  const pets = useSelector(store => store.pets)
  const type = useSelector(store => store.typePet)
  // const loading = useSelector(store => store.loading)
  

  //Paginado//
  const [refresh, setRefresh] = useState(1)
  const [page, setPage] = useState(1)
  const [cantPets, setCantPets] = useState(12)
  const lastPet = page * cantPets
  const firstPet = lastPet - cantPets
  const petsPage = pets?.slice(firstPet, lastPet)
  const cantPages = Math.ceil(pets.length / cantPets)

  const paginado = (pageNum) => {
    setPage(pageNum)
  }

  // const dog = "dog"
  

  useEffect(()=>{
    dispatch(getPets(type));
    
  }, [dispatch])


  return (
    <div>{console.log(`tipo mascota -${type}-`)} 
      <Navbar />
        <Container>
          <Header />
          <FiltersBar />
        {
          refresh && petsPage.map((p,i)=>{
            return(
              <div>
            <div className="boxWrap">
              <Link to={'/home/' + p.id}>
              <Cards image = {p.image} name ={p.name} breed ={p.race} age ={p.age} gender ={p.gender} size ={p.size} description ={p.description} />
              </Link>
            </div>
            </div>
              )
            })
          }
          </Container>
          <Testimonials/>
          <Paginations cantPets = {cantPets} pets = {pets.length} paginado = {paginado} actual = {page}/>

      <Footer />
    </div>
  );
}

export default Home;
