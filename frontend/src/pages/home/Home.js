import React from 'react';
import {Navbar} from '../../components';
import {Header, Footer, Restaurant} from '../../containers';
import '../../App.css';


const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Header />
    <Restaurant />
    <Footer />
  </div>
);

export default Home;
