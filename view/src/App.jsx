import './App.scss'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './components/ErrorPage'
import SharedNavbar from './components/SharedNavbar'
import Sidebar from './components/SideNavigation'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/nav' element={<Sidebar />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
