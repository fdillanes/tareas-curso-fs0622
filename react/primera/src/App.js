import logo from './logo.svg';
import Encabezado from './components/encabezado';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Encabezado />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <p>
          Learning React
        </p>
        <p><button onClick={alert=>'hola'}> alerta</button></p>
      </header>
    </div>
  );
}

export default App;
