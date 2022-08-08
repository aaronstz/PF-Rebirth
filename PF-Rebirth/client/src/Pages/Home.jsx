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
  getLocation,
  getFavs,
  paginateData,
} from "../Redux/Actions/index.js";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchPets } from '../Tools/customHooks.js';
import swal from "sweetalert";

function Home() {

  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }
  
  if (user) {
    var mail = user.mail;
  }
  
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  
  let afiltrar = localStorage.getItem("filters")
  let filtros = !afiltrar ? {name: "", location : [], type : [], gender : [], size : []} : JSON.parse(afiltrar);
  const [ filters, setFilters ] = useState(filtros);

  let typeStorage = JSON.parse(localStorage.getItem("type")); // dog or cat
  if(typeStorage && filters.type[0] !== typeStorage){
    setFilters({
      ...filters,
      type : [typeStorage]
    })
  }
  
  let petType = !typeStorage ? [] : [typeStorage] 

  let number = search.split("&")[0];
  let numberPage = Number(number.split("=")[1]);

  let queryType = !petType ? "" : petType

  if (isNaN(numberPage)) numberPage = 1;
  
  //STATES TO USE THE APP
  // const { totalPages, currentPage } = useSelector((state) => state.prueba); //para dividir la cantidad de pets por pagina
  //LOCAL STATES

  console.log('filters :>> ', filters);
  //GLOBAL STATE THAT CONTROLS THE RENDER OF THE HOME PAGE
  const { data : pets, isLoading } = useFetchPets(filters)
  const megaPets = useSelector(state => state.prueba)
  //STATE THAT CONTROL THE PAGINATE OF THE DATA
  const totalPages = pets&&pets.data.totalPages;
  const currentPage = pets&&pets.data.currentPage;
  const [ searchName, setSearchName] = useState("");
  const [ currentPageNumber, setCurrentPageNumber] = useState(Number(currentPage));

  useEffect(() => {
    dispatch(paginateData(pets))
  }, [dispatch, pets])
  
  useEffect(() => {
    setCurrentPageNumber(0)
  }, [])

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters))
  },[filters])

  useEffect(() => {
    if (user) {
      dispatch(getFavs(mail));
    }
  }, [dispatch, mail, user]);

  useEffect(() => {
    setCurrentPageNumber(currentPage);
  }, [currentPage]);

  //POSIBLEMENTE QUEDE DEPRECATED
  useEffect(() => {
    dispatch(getLocation(queryType));
  }, [dispatch, queryType]);


  function handleFilterBySex(e) {
    let gender = e === "All" ? [] : [e]
    setFilters({
      ...filters,
      name : "",
      gender : gender,
      page : 0
    })
  }

  function handleFilterBySize(e) {
    let size = e === "Any" ? [] : [e]
    setFilters({
      ...filters,
      name : "",
      size : size,
      page : 0
    })
  }

  function handleFilterByLocation(e) {
    let location = e === "All" ? [] : [e]
    setFilters({
      ...filters,
      name : "",
      location : location,
      page : 0,
    })
  }

  function handleOrderByAge(e) {
    let age = e === 'young' ? ["0","1","2"] : e === 'old' ? ["3","4","5","6","7","8","9","10","11","12"] : ["0","1","2","3","4","5","6","7","8","9","10","11","12"];
    setFilters({
      ...filters,
      name : "",
      age : age,
      page : 0,
    })
  }

  function handleChange(e){
    e.preventDefault();
    let pag = 0
    if(e.target.value===""){
      let savedPage = JSON.parse(localStorage.getItem("page"));
      pag = Number(savedPage)
    }
    setFilters({
      ...filters,
      name : e.target.value,
      page : pag
    })
  }

  function handleSearchName(e){
    e.preventDefault();
    setFilters({
      ...filters,
      name : searchName
    })
    setSearchName("")
  }

  function handlePage(e) {
    if (e.target.id === "nextPage") {
      let pag = currentPageNumber + 1;
      setFilters({
        ...filters,
        page : pag
      })
      setCurrentPageNumber(pag);
      localStorage.setItem("page", JSON.stringify(pag))
    } else if (e.target.id === "previousPage") {
      let pag = currentPageNumber - 1;
      setFilters({
        ...filters,
        page : pag
      })
      setCurrentPageNumber(pag);
      localStorage.setItem("page", JSON.stringify(pag))
    }
    // window.scroll({
    //   top: 500, 
    //   left: 0, 
    //   behavior: 'smooth'
    // });
  }

  let page = currentPageNumber;
  let nextPage = page+1;
  let previousPage = page-1;
  if (page > 1) previousPage = page - 1;

  return (
    <div>
      <Navbar filters={filters} setFilters={setFilters}/>
      <Container>
        <Header
          filters={filters}
          setFilters={setFilters}
        />
        <FiltersBar
          filters={filters}
          handleChange={handleChange}
          handleFilterBySex={handleFilterBySex}
          handleFilterBySize={handleFilterBySize}
          handleFilterByLocation={handleFilterByLocation}
          handleOrderByAge={handleOrderByAge}
          handleSearchName={handleSearchName}
          searchName={searchName}
        />
        
        <div className="boxWrap">
          <div className="subBoxWrap">
          {
            isLoading ? null :
            megaPets.pets?.map((p, i) => {
              return (
                <Cards
                  className="apperCards"
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
                  userMail={p.userMail}
                />
              );
            })}
          </div>
        </div>

      </Container>
      <Paginations
        numberPage={currentPageNumber}
        totalPages={totalPages}
        pathname={pathname}
        previousPage={previousPage}
        currentPageNumber={currentPageNumber+1}
        nextPage={nextPage}
        handlePage={handlePage}
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
