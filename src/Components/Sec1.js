import React from "react";
import styled from "styled-components";

const Sec1 = ()=>{

    return(

    <Container>
        <h1>Section1</h1>
    </Container>
    )
}

const Container = styled.section`
    overflow : hidden ;
    display : flex ;
    flex-direction : column ;
    text-align : center;
    
`;

export default Sec1 ;
