import React from "react";
import styled from "styled-components";
import RecoApi from "./RecoApi";


let Recof = (val) => {
    return (
        <Card>
            <img src={val.img} alt="" />
            <div>
            
                <h2>{val.name}</h2>
                <span>{val.time}</span>
                {val.des}
            </div>
            
        </Card>
    )
}

let Card = styled.div`
    width:200px;
    height:250px;
    background-size:cover;
    position:relative;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:5px;
    img{
        width:100%;
        height:100%;
        
        &:hover{
            opacity:.3;
        }
    }

    div{
        position:absolute;
        bottom:20%;
        left:8%;
        font-size:10px;
        opacity:0;
        z-index:5;
        font-family:'Manrope', sans-serif;
        font-weight:100;
        &:hover{
            opacity:1;

            img{
                opacity:.3;
            }

        }
           
           

        span{
            font-size:15px;
            text-transform:uppercase;
        }
    }
    transition:all .2s;

    &:hover{
        transform : scale(1.2);
        
        cursor:pointer;
        

        div{
            opacity:1;
        }


    }


`;



let Recomend = ({Apidata , Head}) => {


    let Container = styled.div`
        display:flex;
        flex-direction:column;
        justify-content : center;
        align-items:center;

        h1{
            font-size : 30px;
        }
       
    `;
    let Content = styled.div`
        display:grid;
        grid-template-columns:repeat(6, minmax(0px , 200px));
        grid-column-gap:30px;
        grid-row-gap:10px;
        justify-content: center;
        overflow:hidden;


        @media only screen and (max-width: 998px){
     {
      display: grid;
      grid-template-columns: repeat(3, minmax(0px, 350px));
      grid-column-gap: 1px;
      grid-row-gap:10px;
      justify-content:center;
      align-items:center;
      overflow:hidden;
      position:relative;
      left:5%;
      right:5%;
    }
  }
        

        @media (max-width: 599px) {
     {
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 350px));
      grid-column-gap: 1px;
      grid-row-gap:10px;
      justify-content:center;
      align-items:center;
      overflow:hidden;
      position:relative;
      left:5%;
      right:5%;
    }
  }
    `;

    let Card = styled.div`
        width:200px;
        height:215px;
        background-size:cover;
        position:relative;
        overflow:hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius:5px;
        img{
            width:100%;
            height:100%;
        }
    `;
    return (
        <Container>
            <h1 >{Head}</h1>

            <Content>
               {Apidata.map(Recof)}
            </Content>
        </Container>
    )
}

export default Recomend;