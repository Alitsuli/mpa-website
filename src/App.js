import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
//import Service from './components/pages/Service';
import Service from './components/pages/Service';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
