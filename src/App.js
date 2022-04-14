import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang di Website Static Mika Mada
        </p>
        <a
          className="App-link"
          href="https://github.com/mikamada"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github saya
        </a>
      </header>
    </div>
  );
}

export default App;
