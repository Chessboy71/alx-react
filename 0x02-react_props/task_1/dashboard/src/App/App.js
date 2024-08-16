import './App.css';
import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Login } from './Login/Login';
import Notifications from './Notifications/Notifications';

function App() {
  return (
    <>
      <Header />
      <>
        <Notifications />
        <div className="App-body">
          <Login />
        </div>
      </>
      <Footer />
    </>
  );
}

export default App;
