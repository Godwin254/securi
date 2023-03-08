//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

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

import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/members' element={<Members />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/access' element={<Access />} />
        <Route path='/account' element={<Account />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
