//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {Routes, Route, Navigate} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './components/ErrorPage'
import SharedNavbar from './components/SharedNavbar'
import Sidebar from './components/SideNavigation'

import Dashboard from './pages/client/Dashboard'
import Members from './pages/client/Members'
import Devices from './pages/client/Devices'
import Access from './pages/client/Access'
import Account from './pages/client/Account'
import { ProtectedRoutes } from './auth/ProtectedRoutes'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />

        <Route path='/admin' element={<ProtectedRoutes />} >
          <Route path="/admin" element={<Navigate replace to='dashboard' />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/members' element={<Members />} />
          <Route path='/admin/devices' element={<Devices />} />
          <Route path='/admin/access' element={<Access />} />
          <Route path='/admin/account' element={<Account />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>


    </div>
  )
}

export default App;
