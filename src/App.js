import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Footer from './Component/Footer';

const App = () => {
  return (
      <Router basename="/Web-Portofolio">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;
