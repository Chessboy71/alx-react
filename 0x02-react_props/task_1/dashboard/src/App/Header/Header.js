import logo from '../../assets/holb-logo.jpg';
import './Header.css';
import React from 'react';
export const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
};
