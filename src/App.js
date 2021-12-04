import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/browse' element={<Browse/>}/>
        <Route  path='/sigin' element={<Signin/>}/>
        <Route  path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}


