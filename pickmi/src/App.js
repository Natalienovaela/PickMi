import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../Navbar';
import './App.css';
import Home from './Home';
import logo from './images/logo.png';
import Header from './Header.js';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
