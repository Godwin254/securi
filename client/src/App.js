import React from 'react';
import './App.scss'
import { Route, Routes, Link } from "react-router-dom";
import SecurityGate from './pages/SecurityGate';
import Home from './pages/Home';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<SecurityGate />} />
      </Routes>
    </div>
  );
}


export default App;
