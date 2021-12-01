import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home, Reserve } from './pages';
import Create from "./components/create";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Reserve" element={<Reserve />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </Router>

    
  </div>
);

export default App;
