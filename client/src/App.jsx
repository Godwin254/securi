import './App.scss'
import React, {useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'


import { ProtectedRoutes } from './auth/ProtectedRoutes'

//pages -shared
import LandingPage from './pages/shared/LandingPage'
import ErrorHandler from './pages/shared/ErrorHandler'
import Signup from './pages/shared/Signup'
import Login from './pages/shared/Login'
import Register from './pages/shared/Register'

//pages - gaurd
import GuardMainPage from './pages/guard/GuardMainPage'

//pages - Resident
import ClientManageMembers from './pages/resident/ClientManageMembers'
import ClientDashboard from './pages/resident/ClientDashboard'
import ClientManageDevices from './pages/resident/ClientManageDevices'
import ClientSettings from './pages/resident/ClientSettings'
import ClientAccessHistory from './pages/resident/ClientAccessHistory'


//pages - Admin
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminManageDevices from './pages/admin/AdminManageDevices'
import AdminManageResidents from './pages/admin/AdminManageResidents'
import AdminAccessHistory from './pages/admin/AdminAccessHistory'
import AdminSettings from './pages/admin/AdminSettings'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/app/:uid/register' element={<Register />} />

        <Route path='/app/admin' element={<AdminDashboard />} />
        <Route path='/app/admin/manage-residents' element={<AdminManageResidents />} />
        <Route path='/app/admin/manage-devices' element={<AdminManageDevices />} />
        <Route path='/app/admin/access-history' element={<AdminAccessHistory />} />
        <Route path='/app/admin/settings' element={<AdminSettings />} />

        <Route path='/app/:estateId/guard/:sessionId' element={<GuardMainPage />} />
        
        <Route path='/app/resident/' element={<ClientDashboard />} />
        <Route path='/app/resident/manage-members' element={<ClientManageMembers />} />
        <Route path='/app/resident/manage-devices' element={<ClientManageDevices />} />
        <Route path='/app/resident/access-history' element={<ClientAccessHistory />} />
        <Route path='/app/resident/settings' element={<ClientSettings />} />

        {
          /**
           *  <Route path='/app/admin' element={<ProtectedRoutes />} >
          <Route path='/app' element={<AdminDashboard />} />
          <Route path='/app/manage-residents' element={<AdminManageResidents />} />
          <Route path='/app/manage-devices' element={<AdminManageDevices />} />
          <Route path='/app/access-history' element={<AdminAccessHistory />} />
          <Route path='/app/settings' element={<AdminSettings />} />
        </Route>

        <Route path='/app/resident' element={<ProtectedRoutes />} >
          <Route path='/app' element={<ClientDashboard />} />
          <Route path='/app/manage-members' element={<ClientManageMembers />} />
          <Route path='/app/manage-devices' element={<ClientManageDevices />} />
          <Route path='/app/access-history' element={<ClientAccessHistory />} />
          <Route path='/app/settings' element={<ClientSettings />} />
        </Route>

        <Route path='/app/admin' element={<ProtectedRoutes />} >
          <Route path='/app/:estateId/guard/:sessionId' element={<GuardMainPage />} />
        </Route>
           */
        }


        <Route path='*' element={<ErrorHandler />} />
      </Routes>


    </div>
  )
}

export default App;
