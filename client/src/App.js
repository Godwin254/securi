import './styles/components/App.scss'
import Home from './components/Home'
import Admin from './components/Admin'
import SecurityGuard from './components/SecurityGuard';
import Resident from './components/Resident'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      {/*<NavBar />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/security" element={<SecurityGuard />} />
        <Route path="/resident" element={<Resident />} />
      </Routes>
    </div>
  );
}

/*
const NavBar = () => {

  return (
    <div>
      <Link to="/home"> Home</Link>
      <Link to="/admin"> Admin</Link>
      <Link to="/security"> Security</Link>
    </div>
  )
}*/


export default App;
