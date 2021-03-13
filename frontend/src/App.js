import UserList from './components/UserList';

import logo from './logo.svg';
import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      <UserList />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React This is a Super Test
        </a>
      </header>
    </div>
  );
}

export default App;
