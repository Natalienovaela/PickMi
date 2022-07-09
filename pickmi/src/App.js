import React from 'react';
import './App.css';
import Home from './pages/home.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import LandingPage from './pages/landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
