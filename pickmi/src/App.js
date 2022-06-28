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
    // <>
    // <Router>
    //   {/* <Navbar/> */}
    //   <Routes>
    //     <Route path='/welcome' element={<Home/>} />
    //   </Routes>
    // </Router>
    // </>

    <div>
      <h1>This is App landing page.</h1>
      <Header/>
      <img src={logo}/>
      <Footer/>
    </div>
  );
}

export default App;
