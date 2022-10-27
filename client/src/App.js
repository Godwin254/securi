import React from 'react';
import './App.scss'
import { Route, Routes, Link } from "react-router-dom";
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
