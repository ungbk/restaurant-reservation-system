import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home, Reserve } from './pages';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Reserve" element={<Reserve />} />
      </Routes>
    </Router>

    
  </div>
);

export default App;
