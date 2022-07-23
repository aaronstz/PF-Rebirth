import React from "react";
import Container from "react-bootstrap/Container";
import Cards from "../Components/Card/Card";
import Paginations from "../Components/Pagination/Pagination";
import Navbar from "../Components/Navbar/Navbar";
import FiltersBar from "../Components/FilterBar/FilterBar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../index.css";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <FiltersBar />
        <div className="boxWrap">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Paginations />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
