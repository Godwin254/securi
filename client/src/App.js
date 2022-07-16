import './styles/components/App.scss'
import Home from './components/Home'
//import Admin from './components/Admin'
//import SecurityGuard from './components/SecurityGuard';
import Resident from './components/Resident'
import { BrowswerRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
