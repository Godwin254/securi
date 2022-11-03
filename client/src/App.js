import React, { useState, useEffect } from 'react';
import './App.scss'
import { Route, Routes, Navigate } from "react-router-dom";
import SecurityGate from './pages/SecurityGate';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Requests from './pages/Requests';
import Users from './pages/Users';
import AccessHistory from './pages/AccessHistory';
import RequestDetails from './pages/RequestDetails';
import EditUser from './pages/EditUser';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import EditMember from './pages/EditMember'; 
import { ResidentProtectedRoutes } from './auth/ResidentProtectedRoutes';
import { AdminProtectedRoutes } from './auth/AdminProtectedRoutes';
import axios from 'axios';

function App() {
  const [residents, setResidents] = useState([]);

  //fetch residents data
  const fetchData = async () => {
    const res = await axios.get('http://localhost:8000/api/residents');
    setResidents(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [residents]);

  //console.log(residents);
  return (
    
    //render private routes
    
    <div className="App">
      <Routes>
        {/*public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<SecurityGate />} />
        <Route path="/admin-login" element={<Admin />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        {/*private routes */}
        <Route path="/resident" element={<ResidentProtectedRoutes />}>

        </Route>

        <Route path="/admin" element={<AdminProtectedRoutes />}>
          <Route path="/admin" element={<Navigate replace to='requests' />} />
          <Route path="requests" element={<Requests residents={residents}/>} />
          <Route path="request/:id" element={<RequestDetails />} />
          <Route path="manage-users" element={<Users residents={residents} />} />
          <Route path="Edit/:id" element={<EditUser />} />
          <Route path="edit-member/:id/:memberId" element={<EditMember />} />
          <Route path="access-history" element={<AccessHistory />} />
        </Route>

      </Routes>
    </div>
  );
}


export default App;
