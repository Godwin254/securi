import './styles/components/App.scss'
import Home from './components/Home'
import Admin from './components/Admin'
import SecurityGuard from './components/SecurityGuard';

function App() {
  return (
    <div className="App">
     {/** <Home />*/}
     {/*<Admin />*/}
     <SecurityGuard />
    </div>
  );
}

export default App;
