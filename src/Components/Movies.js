// import React, { Component } from "react";
import Navbar from "./Navbar";
import Recomend from "./Recomend";
import MovieApi from "./MovieApi";
import styled from "styled-components";

const Movies = () => {


    const Container = styled.div`
    
        display:grid;
        justify-content:center;
        align-items:space-between;

    `;
    
    
    
    return(
        <Container>

        
         <Navbar/>
        <Recomend Apidata={MovieApi}/>

        </Container>
        
    )
}

export default Movies ;