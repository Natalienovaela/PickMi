import React, {useState} from 'react'
import './App.css';
import Filter from './pages/filter.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landing';
import Contact from './pages/contact';
import About from './pages/about';
import FAQ from './pages/faq';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import Navbar from '../Navbar';
import './App.css';
import logo from './images/logo.png';

function App() {
  const[isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/filter" element ={<Filter/>} />
        <Route path="/" element ={<LandingPage/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/faq" element ={<FAQ/>}/>
      </Routes>
    </Router>
  );
}

export default App;
