import './styles/components/App.scss'
import Home from './components/Home'
//import Admin from './components/Admin'
//import SecurityGuard from './components/SecurityGuard';
import Resident from './components/Resident'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/resident" element={<Resident/>} />
        </Routes>
    
    </div>
  );
}

export default App;
