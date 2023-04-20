import * as React from "react";
import { Link } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react'

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Register from "./pages/Register";

import './App.css'

function App() {
  
  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
