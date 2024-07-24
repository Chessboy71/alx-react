import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import logo from './holb-logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard :</p>
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
