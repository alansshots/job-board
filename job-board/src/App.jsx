import * as React from "react";
import {Route, Routes} from 'react-router-dom';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Offers from "./pages/Offers";
import CompanyPage from "./pages/CompanyPage";

import Login from "./pages/Login"
import Register from "./pages/Register";

import './App.css'

function App() {
  
  return (
    <div className="App bg-gray-100">
     <Navbar/>
     <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/offers' element={<Offers/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog/:slug' element={<BlogPost/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/company' element={<CompanyPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
