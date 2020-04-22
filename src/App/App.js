import React, {Component} from 'react';
import {BrowserRouter as Router,Route,} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';

function App() {
  return (
    <Router>
        <Route exact path="/" component={ Home }/>
        <Route path="/wines/details/:id" component={ Details }/>
    </Router>
  );
}

export default App;
