// import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { auth , provider } from "../Firebase";
import ReactJsAlert from "reactjs-alert"

import React, { useEffect, useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
// import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../features/user/userSlice";


const Navbar = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    const [value, setValue] = useState('')
    const handleClick = () => {

        if (!userName) {

            history("/");

            signInWithPopup(auth, provider).then((data) => {
                setValue(data.user.email)
                console.log(data);
                history("/home");
                alert("WELCOME TO THE DISNEY+ WORLD ")
                localStorage.setItem("email", data.user.email)
            })
        }

        else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history("/");
                    alert("successfully Logout!")

                })
        }
    }


    // const [value, setValue] = useState('')
    // const handleClick = () => {
    //     if(!userName){


    //     signInWithPopup(auth, provider).then((data) => {
    //         setValue(data.user.email)
    //         console.log(data);
    //         localStorage.setItem("email", data.user.email)
    //     })}

    //     else if(userName){
    //         auth
    //         .signOut()
    //                 .then(() => {
    //                     dispatch(setSignOutState());
    //                     history.push("/");
    //                 })
    //     }
    // }


    // const handleAuth = () => {
    //     if (!userName) {
    //       auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //           setUser(result.user);
    //         })
    //         .catch((error) => {
    //           alert(error.message);
    //         });
    //     } else if (userName) {
    //       auth
    //         .signOut()
    //         .then(() => {
    //           dispatch(setSignOutState());
    //           history("/");
    //         })
    //         .catch((err) => alert(err.message));
    //     }
    //   };

    // useEffect(() => {
    //     setValue(localStorage.getItem('email'))
    // })

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                // history("/home");
               
                return;

            }
        });
    }, [userName]);


    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };


    return (
        <>
            <Component>

                <Logo href="/" src="\Images\logo.svg" alt="Disney+" />

                {/* <Logo ><a href="/" > <img src="\Images\logo.svg" alt="" /> </a></Logo> */}

                {!userName ? (
                    <Button onClick={handleClick}>LOGIN</Button>
                ) : (




                    <>

                        <Ul>
                            <List  >

                                <Link to="/home"><img src="/Images/home-icon.svg" alt="" />HOME</Link>

                            </List>

                            <List>

                                <Link to="/home"><img src="/Images/search-icon.svg" alt="" />SEARCH</Link>

                            </List>

                            <List>

                                <Link to="/home"><img src="/Images/watchlist-icon.svg" alt="" />WATCHLIST</Link>

                            </List>

                            <List>

                                <Link to="/movies"><img src="/Images/home-icon.svg" alt="" />MOVIES</Link>

                            </List>

                            <List>

                                <Link to="/series"><img src="/Images/series-icon.svg" alt="" />SERIES</Link>

                            </List>
                        </Ul>

                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleClick}>Sign out</span>
                            </DropDown>
                        </SignOut>

                    </>

                )}



                {/* <Button onClick={handleClick}>LOGIN</Button> */}


            </Component>


        </>
    )
}


const Component = styled.div`

    display : flex;
    flex-direction : row ;
    background-color : black ;
    justify-content : space-between ;
    align-items:center ;
    height : 10vh ;
    width:100%;
    position: fixed ;
    padding : 0 5%; 
    opacity : 1;
    z-index:5;
    ${'' /* min-width:700px; */}
    ${'' /* overflow :hidden; */}
`;

const Ul = styled.ul`
    max-width : 700px;
    position: absolute;
    left : 200px;


    @media only screen and (max-width : 1000px) {
        &{
            display:none;
        }
}
`;


const Logo = styled.img`
    height: 80%;
    top : 0 ;
    left : 0 ;
    z-index:2 ;
    cursor : pointer;
    path:"/" ;
`;

const Button = styled.button`
    background : transparent ;
    color : white;
    border : 1px solid #0063e5;
    border-radius : 3px;
    height:60%;
    padding : 0 30px;
    font-weight : bold ;
    transition:all .5s;
    &:hover{
        background : #0063e5 ;
        cursor : pointer;
    }
    z-index:2;
    
`;

const List = styled.a`

    text-decoration : none ;
    font-family: 'Manrope', sans-serif;
    display: flex;
    flex-direction : row;

    img{
        width:20%;
    }

    a{
        display : flex;
        align-items : center ;
    
    
            &::before{
                content: "";
                position: absolute; 
                background: #2a40d1;
                width: 0%;
                height: 4px;
                ${'' /* left: 0; */}
                top:0.5;
                bottom: -6px;
                transition: all 1s;
    }  


    &:hover::before,
    &:active::before {
    width: 11%;
    }
        

    
    
   
}     
   
        
    `;



const UserImg = styled.img`
    height: 100%;
  `;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
  `;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    &:hover {
      ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  `;










export default Navbar;