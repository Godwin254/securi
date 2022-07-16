import './styles/components/App.scss'
import Home from './components/Home'
//import Admin from './components/Admin'
//import SecurityGuard from './components/SecurityGuard';
import Resident from './components/Resident'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Home />
      </Routes>
    </div>
  );
}



export default App;
