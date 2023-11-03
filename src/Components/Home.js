import React from "react";
import Navbar from "./Navbar";
import Api from "./Api";
import styled from "styled-components";
import Imgslider from "./Imgslider";
import Viewer from "./Viewer";
import Recomend from "./Recomend";
import RecoApi from "./RecoApi";
import DisneyoriginalApi from "./DisneyoriginalApi";
import Disneyoriginal from "./Disneyoriginal";
import Secret from "./Secret";
import ViewApi from "./ViewApi";

const Home = () => {

    const Container = styled.section`

    overflow: hidden;
    display: flex;
    width:100%;
    position:absolute;
    justify-content : center;
    align-items:center;
    flex-direction:column;
    padding: 0px 0 0 0;
    
    `;
    
    
    
    

    const BgImage = styled.div`
    height: 100%;
    width:100%;
    background-position: top;
    background-size: cover;
    background-repeat: repeat;
    background-image: url("/Images/home-background.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    min-width:700px;
    
`;


    return (
        <>


            <Navbar />
            <Container>


                <Imgslider  />
                <BgImage />
                <Viewer  Apidat ={ViewApi}/>
                <Recomend   Apidata ={RecoApi} Head="Recomend for you"/>
                
                <Disneyoriginal/>
               
               
            </Container>


        </>
    )
}

export default Home;