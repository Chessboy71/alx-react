import './App.css';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import logo from './holb-logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email:</label>
          <input id="email" type="email" />
          <label for="password">Password:</label>
          <input id="password" type="password" />
          <button type="submit">OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(1)}
        </p>
      </div>
    </>
  );
}

export default App;
