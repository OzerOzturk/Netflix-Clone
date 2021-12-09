import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserNavigate, ProtectedRoute } from './helpers/routes';
import {useAuthListener} from './hooks';

export default function App() {
  const {user} = useAuthListener();


  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/signin' element={<Signin/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  user={user} path='/signin' loggedInPath={ROUTES.BROWSE} element={<ProtectedRoute/>}/>
        <Route  path='/browse' element={<Browse/>}/>
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}


