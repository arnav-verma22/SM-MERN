//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/Register";
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
