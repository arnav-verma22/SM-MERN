//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/Register";
import Profile from "./components/profile";
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/profile" element = {<Profile />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
