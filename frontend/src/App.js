import React, { Component } from 'react';
import {Navbar} from './components';
import {Header, Footer, Restaurant} from './containers';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import './App.css';


const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Header />
    <Restaurant />
    <Footer />
  </div>
);

export default App;
