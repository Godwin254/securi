import './styles/components/App.scss'
import Home from './components/Home'
import AdminLogin from './components/AdminLogin'
import SecurityGuard from './components/SecurityGuard';
import Resident from './components/Resident'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/security" element={<SecurityGuard />} />
        <Route path="/resident" element={<Resident />} />
      </Routes>
    </div>
  );
}


export default App;
