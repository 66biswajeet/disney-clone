import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";


const Login = () => {

    const Container = styled.section`

    overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width:100%;
    `;

    const Content = styled.div`
        margin-bottom: 10vw;
        width: 100%;
        position: relative;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 80px 40px;
        height: 100%;
    `;

    const BgImage = styled.div`
        height: 100%;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/Images/login-background.jpg");
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
        ${'' /* min-width:700px; */}
        
    `;

    const CTA = styled.div`

        margin-bottom : 100px;
        max-width : 650px;
        display: flex;
        flex-direction: column;
        justify-content : center ;
        align-items : center ;
        column-gap : 40px;
    `;
    const CTAlogoOne = styled.img`
        ${'' /* height : 100%; */}
        width:100%;
        z-index : 2;
        
    `;

    const CTAlogoTwo = styled.img`
        ${'' /* height : 100%; */}
        width:100%;
        z-index : 2;
        margin : 20px 0 ;
        
    `;

    const Button = styled.button`
        background-color: #0063e5;
        color: white;
        border : none ;
        font-weight : 800 ;
        height: 7vh;
        width: 100%;
        font-size : 20px;
        margin: 20px  0 ;
        border-radius:2px;
        transition:all .5s;
        &:hover{
            background-color:transparent;
            border:1px solid white ;
        }
    `;

    const Para = styled.p`

        word-spacing: 5px;
        max-width : 100%;
        font-family: 'Manrope', sans-serif;
        margin: 10px  0 ;
        line-height : 1.5; 
    `;

    return (
        <>
            <Container>

                    <Navbar/>
                
                <Content>
                    <CTA>
                        <CTAlogoOne src="/Images/cta-logo-one.svg"/>
                        <Button>GET IT ALL THERE</Button>
                        <Para>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1. </Para>
                        <CTAlogoTwo src="/Images/cta-logo-two.png"/>
                    </CTA>
                </Content>
                    <BgImage />
            </Container>
        </>
    )
}

export default Login;