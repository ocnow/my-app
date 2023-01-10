import logo from './logo.svg';
import './App.css';
import './login/login'
import Login from './login/login';


function LoadAppButton() {
  return (
    <button onClick={DoThis}> Load Application </button>
  );
}

function DoThis() {
  return (
    <Login />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <LoadAppButton />
        
        
      </header>
    </div>
  );
}

export default App;
