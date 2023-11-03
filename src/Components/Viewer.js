import React from "react";

import styled from "styled-components";

import ViewApi from "./ViewApi";

let Viewf = (val) =>{
    return(
    <Content>
        <img src={val.img} alt="" />
        
        <video  src={val.video} type = 'video/mp4' autoPlay={true} loop = {true}  playsInline = {true} />
   </Content>
        
        )
    

    
}

const Content = styled.div`
    
${'' /* position:relative; */}
${'' /* width:100%;
height:50%; */}
display:flex;
flex-direction:column;
border:2px solid #242424;
${'' /* justify-content:center;
aling-items:center; */}
overflow:hidden;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px;
transition : all .5s;
position:relative;
height:150px;

img{
        width:100%;
        height:100%;
        position:absolute;
        z-index:1;
        top:0px;
        left:0;
        
}

&:hover{
    border:2px solid  #c7c8c9;
    transform:scale(1.1);
    video{
        opacity:1;
    }
}


video{
    width:100%;
    height:100%;
    position:absolute;
    
    z-index:0;
    opacity:0;
   top:0;
   object-fit:cover;
   &:hover{
    opacity:1;
   }
}
    
    

`;

let Viewer = ({Apidat}) =>{

    const Container = styled.section`
    
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 500px));
    grid-gap: 30px;
    justify-content: space-around;
    margin-top:40px;
    width:95%;
    position:relative;

    @media (max-width: 998px) {
     {
      display: grid;
      grid-template-columns: repeat(1, minmax(300px, 350px));
      grid-gap: 0px;
      grid-row-gap:20px;
      justify-content: space-around;
    }
  }
    `;


    const Content = styled.div`
    
        ${'' /* position:relative; */}
        width:100%;
        height:100%;
        
        border:2px solid red;
        background-size: cover;
        overflow:hidden;
        
        
        

        img{
                width:100%;
                height:100%;
                position:relative;
        }
    `;

    return(
       <Container>
           
            {Apidat.map(Viewf)}
            
       </Container>
    )
}

export default Viewer;