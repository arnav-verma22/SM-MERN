//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/Register";
import Profile from "./components/profile";
import Activities from "./components/activities";
import Explore from "./components/explore";
import Exp from "./components/Exp";
import Newprofile from "./components/about";
import Signin from "./components/signin";
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
        <Route path="/edit" element = {<Signin />} />
        <Route path="/about" element = {<Newprofile />} />
        <Route path="/activities" element = {<Activities />} />
        <Route path="/explore" element = {<Explore />} />
        <Route path="/exp" element = {<Exp />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
