import React from "react";
import Secret from "./Secret";
import Viewer from "./Viewer";
import Navbar from './Navbar'
import styled from "styled-components";

let Series = () =>{


    let Card = styled.div`
    
        position : relative;
        display :flex;
        flex-direction:column;
        padding:0 0 20px 0;
    `;
    return(
        <Card>
            <Navbar/>
            {/* <Viewer  Apidat ={Secret}/> */}
        </Card>
    )
}

export default Series ;