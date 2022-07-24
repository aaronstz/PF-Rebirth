import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Card/Card";
import Paginations from "../Components/Pagination/Pagination";
import Navbar from "../Components/Navbar/Navbar";
import FiltersBar from "../Components/FilterBar/FilterBar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function Details() {
  return (
    <div>
      <Container>
        <Navbar/>
        <Header/>
        
        <br/>
        <Paginations/>
        
      </Container>
      <Footer/>
    </div>
  )
}

export default Details