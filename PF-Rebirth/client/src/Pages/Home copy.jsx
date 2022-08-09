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
  filterByLocation,
  filterBySex,
  filterBySize,
  fullFilterAge,
  fullFilterLocation,
  fullFilterSex,
  fullFilterSize,
  // getPetFilters,
  orderByAge,
  getFavs,
  paginateData,
  getPetNames,
} from "../Redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  if (user) {
    var mail = user.email;
  }

  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  let petType = search.split("type=")[1];
  let number = search.split("&")[0];
  let numberPage = Number(number.split("=")[1]);

  if (isNaN(numberPage)) numberPage = 1;

  //STATE TO USE THE APP
  const { pets, totalPages, currentPage } = useSelector(
    (state) => state.prueba
  ); //para dividir la cantidad de pets por pagina
  //LOCAL STATES
  const [currentPageNumber, setCurrentPageNumber] = useState(numberPage);
  const [type, setType] = useState(petType);
  const [searchName, setSearchName] = useState("");
  const [pathSearchName, setPathSearchName] = useState(search);

  useEffect(() => {
    setPathSearchName(search);
  }, [search]);

  useEffect(() => {
    dispatch(paginateData(type, pathSearchName));
  }, [dispatch, pathSearchName, type]);

  useEffect(() => {
    setType(petType);
  }, [petType]);

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
    dispatch(getLocation(petType));
  }, [dispatch, petType]);

  // const [searchName, setSearchName] = useState("");

  // let enrutado = path.length > 1 ? path[1].replace("page=", "") : null;
  // enrutado = `?name=${searchName}`

  function handleFilterBySex(e) {
    dispatch(filterBySex(e));
    dispatch(fullFilterSex(e));
  }
  function handleFilterBySize(e) {
    dispatch(filterBySize(e));
    dispatch(fullFilterSize(e));
  }
  function handleFilterByLocation(e) {
    dispatch(filterByLocation(e));
    dispatch(fullFilterLocation(e));
  }
  function handleOrderByAge(e) {
    dispatch(orderByAge(e));
    dispatch(fullFilterAge(e));
  }

  function handlePage(e) {
    if (e.target.id === "nextPage") {
      setCurrentPageNumber(currentPageNumber + 1);
    } else if (e.target.id === "previousPage") {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  }

  function handleChange(e) {
    setSearchName(e.target.value);
  }

  function handleSearchName(e) {
    e.preventDefault();
    navigate(`/home/name/?name=${searchName}`);
    dispatch(getPetNames(searchName));
  }

  let page = currentPageNumber;
  let nextPage = page + 1;
  let previousPage = page - 1;

  if (page > 1) previousPage = page - 1;

  return (
    <div>
      <Navbar />
      <Container>
        <Header type={search} />
        <FiltersBar
          handleChange={handleChange}
          handleFilterBySex={handleFilterBySex}
          handleFilterBySize={handleFilterBySize}
          handleFilterByLocation={handleFilterByLocation}
          handleOrderByAge={handleOrderByAge}
          handleSearchName={handleSearchName}
          searchName={searchName}
        />

        <div className="boxWrap">
          {pets?.map((p, i) => {
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
                userMail={p.userMail}
              />
            );
          })}
        </div>
      </Container>
      <Paginations
        numberPage={currentPageNumber}
        totalPages={totalPages}
        pathname={pathname}
        previousPage={previousPage}
        currentPageNumber={currentPageNumber + 1}
        nextPage={nextPage}
        handlePage={handlePage}
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
