//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/login";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Login />
    </BrowserRouter>
  );
}

export default App;
