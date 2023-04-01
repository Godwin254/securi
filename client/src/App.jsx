import './App.scss'
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


//pages - Admin
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminManageDevices from './pages/admin/AdminManageDevices'
import AdminManageResidents from './pages/admin/AdminManageResidents'
import AdminAccessHistory from './pages/admin/AdminAccessHistory'
import AdminSettings from './pages/admin/AdminSettings'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/app/:uid/register' element={<Register />} />

        <Route path='/app' element={<AdminDashboard />} />
        <Route path='/app/manage-residents' element={<AdminManageResidents />} />
        <Route path='/app/manage-devices' element={<AdminManageDevices />} />
        <Route path='/app/access-history' element={<AdminAccessHistory />} />
        <Route path='/app/settings' element={<AdminSettings />} />

        <Route path='/app/:estateId/guard/:sessionId' element={<GuardMainPage />} />

        <Route path='*' element={<ErrorHandler />} />
      </Routes>


    </div>
  )
}

export default App;
