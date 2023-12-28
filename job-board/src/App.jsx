import * as React from "react";
import { useState } from "react";
import {Route, Routes} from 'react-router-dom';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import OfferPage from "./pages/OfferPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import CompanyPage from "./pages/CompanyPage";
import AddOffer from "./pages/AddOffer";

import Login from "./pages/Login"
import Register from "./pages/Register";
import RegisterConfirmation from "./pages/RegisterConfirmation";

import NotFound from "./pages/NotFound";

import './App.css'

function App() {

  return (
    <div className="App bg-gray-100">
     <Navbar/>
     <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/offers/' element={<Offers/>} />
          <Route path='/offers/:slug' element={<OfferPage/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog/:slug' element={<BlogPost/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/register-confirmation' element={<RegisterConfirmation/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/company/:slug' element={<CompanyPage/>}/>
          <Route path='/company/offers/:slug' element={<OfferPage/>} />
          <Route path='/company/:slug/addOffer' element={<AddOffer/>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
