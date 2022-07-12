import './styles/components/App.scss'
import Home from './components/Home'
import Admin from './components/Admin'
import SecurityGuard from './components/SecurityGuard';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
