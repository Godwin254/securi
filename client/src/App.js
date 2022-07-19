import './styles/components/App.scss'
import Home from './views/Home'
import Admin from './views/Admin'
import SecurityGuard from './views/SecurityGuard';
import Resident from './components/Resident'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/security" element={<SecurityGuard />} />
        <Route path="/resident" element={<Resident />} />
      </Routes>
    </div>
  );
}


export default App;
