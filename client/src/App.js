import React from 'react';
import './App.scss'
import { Route, Routes, Link } from "react-router-dom";
import SecurityGate from './pages/SecurityGate';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Requests from './pages/Requests';
import Users from './pages/Users';
import AccessHistory from './pages/AccessHistory';
import RequestDetails from './pages/RequestDetails';
import EditUser from './pages/EditUser';
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<SecurityGate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Requests />} /> 
        <Route path="/admin/dashboard/request/:name" element={<RequestDetails />} /> 
        <Route path="/admin/dashboard/manage-users" element={<Users />} /> 
        <Route path="/admin/dashboard/Edit/:name" element={<EditUser />} /> 
        <Route path="/admin/dashboard/access-history" element={<AccessHistory />} /> 
      </Routes>
    </div>
  );
}


export default App;
