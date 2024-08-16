import React from 'react';
import './Login.css';

export const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        <button type="submit">OK</button>
      </form>
    </>
  );
};
