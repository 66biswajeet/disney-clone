
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './Components/Home.js';

import Login from './Components/Login.js';

import Movies from './Components/Movies';

import Series from './Components/Series'

import { selectUserName } from "./features/user/userSlice";

import {  useSelector } from "react-redux";

function App() {
  const userName = useSelector(selectUserName);


  return (
    <>

        <BrowserRouter>

        { !userName ? (
          <Routes>
            
            <Route path='/' element={<Login />} />
            

          </Routes>
        ) :
         

          (<Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
          </Routes>)
        }
        </BrowserRouter>

       

      
    </>
  );
}

export default App;
