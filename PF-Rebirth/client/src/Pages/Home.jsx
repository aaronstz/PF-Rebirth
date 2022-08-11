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
  getChat,
  GetNotification,
} from "../Redux/Actions/index.js";

import NotFound from "../Components/NotFound/NotFound";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFetchPets } from "../Tools/customHooks.js";
// import swal from "sweetalert";
import { eliminaDuplicados } from "../Tools/functions";

function Home() {
  const dispatch = useDispatch();

  let user = null;
  if (localStorage.user) {
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  if (user) {
    var mail = user.mail;
  }

  const initialFilters = {
    name: "",
    location: [],
    type: [],
    gender: [],
    size: [],
  };
  let afiltrar = localStorage.getItem("filters");
  let filtros = !afiltrar ? initialFilters : JSON.parse(afiltrar);
  const [filters, setFilters] = useState(filtros);

  let typeStorage = JSON.parse(localStorage.getItem("type")); // dog or cat
  if (typeStorage && filters.type[0] !== typeStorage) {
    setFilters({
      ...filters,
      type: [typeStorage],
    });
  }

  let petType = !typeStorage ? [] : [typeStorage];
  let queryType = !petType ? "" : petType;

  //STATES TO USE THE APP
  //LOCAL STATES
  //GLOBAL STATE THAT CONTROLS THE RENDER OF THE HOME PAGE
  const aNotif = useSelector((state) => state.adoptionChat);
  const newNotification = useSelector((state) => state.notification);
  const { data: pets, isLoading } = useFetchPets(filters);
  const megaPets = useSelector((state) => state.prueba);
  //STATE THAT CONTROL THE PAGINATE OF THE DATA
  const totalPages = pets && pets.data.totalPages;
  const currentPage = pets && pets.data.currentPage;
  const [searchName, setSearchName] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(
    Number(currentPage)
  );

  useEffect(() => {
    dispatch(getChat(mail));
  }, [dispatch, mail]);

  useEffect(() => {
    dispatch(paginateData(pets));
  }, [dispatch, pets]);

  useEffect(() => {
    setCurrentPageNumber(0);
  }, []);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    if (user) {
      dispatch(getFavs(mail));
    }
  }, [dispatch, mail, user]);

  useEffect(() => {
    dispatch(GetNotification(mail));
  });

  useEffect(() => {
    setCurrentPageNumber(currentPage);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getLocation(queryType));
  }, [dispatch, queryType]);

  function handleFilterBySex(e) {
    let gender = e === "All" ? [] : [e];
    setFilters({
      ...filters,
      gender: gender,
      page: 0,
    });
  }

  function handleFilterBySize(e) {
    let size = e === "Any" ? [] : [...filters.size, e];
    let newSize = eliminaDuplicados(size);
    setFilters({
      ...filters,
      size: newSize,
      page: 0,
    });
  }

  function handleFilterByLocation(e) {
    let location = e === "All" ? [] : [...filters.location, e];
    let newLocation = eliminaDuplicados(location);
    setFilters({
      ...filters,
      location: newLocation,
      page: 0,
    });
  }

  function handleOrderByAge(e) {
    setFilters({
      ...filters,
      age: e,
      page: 0,
    });
  }

  function handleOrderByTime(e) {
    setFilters({
      ...filters,
      time: e,
      page: 0,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    let pag = 0;
    if (e.target.value === "") {
      let savedPage = JSON.parse(localStorage.getItem("page"));
      pag = Number(savedPage);
    }
    setFilters({
      ...filters,
      name: e.target.value,
      page: pag,
    });
    setSearchName("")
  }

  function handleSearchName(e) {
    e.preventDefault();
    let pag = 0;
    if (e.target.value === "") {
      let savedPage = JSON.parse(localStorage.getItem("page"));
      pag = Number(savedPage);
    }
    setFilters({
      ...filters,
      name: searchName,
      page: pag
    });
    setSearchName("");
  }

  function handlePage(e) {
    if (e.target.id === "nextPage") {
      let pag = currentPageNumber + 1;
      setFilters({
        ...filters,
        page: pag,
      });
      setCurrentPageNumber(pag);
      localStorage.setItem("page", JSON.stringify(pag));
    } else if (e.target.id === "previousPage") {
      let pag = currentPageNumber - 1;
      setFilters({
        ...filters,
        page: pag,
      });
      setCurrentPageNumber(pag);
      localStorage.setItem("page", JSON.stringify(pag));
    }
    window.scroll({
      top: 500,
      behavior: "smooth"
    })
  }

  function handleDeleteFilters(e) {
    e.preventDefault();
    setFilters({
      name: "",
      location: [],
      type: [],
      gender: [],
      size: [],
    });
  }

  let page = currentPageNumber;
  let nextPage = page + 1;
  let previousPage = page - 1;
  if (page > 1) previousPage = page - 1;

  return (
    <div>
      <Navbar
        filters={filters}
        setFilters={setFilters}
        notificacion={aNotif.length}
        newNotification={newNotification}
      />
      <Container>
        <Header filters={filters} setFilters={setFilters} />
        <FiltersBar
          name={filters.name}
          filters={filters}
          setFilters={setFilters}
          handleChange={handleChange}
          handleFilterBySex={handleFilterBySex}
          handleFilterBySize={handleFilterBySize}
          handleFilterByLocation={handleFilterByLocation}
          handleOrderByAge={handleOrderByAge}
          handleSearchName={handleSearchName}
          searchName={searchName}
          handleDeleteFilters={handleDeleteFilters}
          handleOrderByTime={handleOrderByTime}
        />

        <div className="boxWrap">
          {megaPets.pets && !megaPets.pets.length ? (
            <div className="notFound-img">
              <NotFound />
            </div>
          ) : (
            <>
              {isLoading
                ? null
                : megaPets.pets?.map((p, i) => {
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
                        views={p.views}
                        type={p.type}
                        active={p.active}
                      />
                    );
                  })}
            </>
          )}
        </div>
      </Container>
      <Paginations
        pets={megaPets.pets}
        numberPage={currentPageNumber}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
        handlePage={handlePage}
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
