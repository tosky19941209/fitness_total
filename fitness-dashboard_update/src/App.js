import './App.css';
import { ReactDOM } from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HomePage from './component/homepage';
import SignIn from './component/signin';
import SignUp from './component/signup';
import Layout from './component/layout';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="" element={<Layout />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
