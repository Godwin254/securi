import './App.scss'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
