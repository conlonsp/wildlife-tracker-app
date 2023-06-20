import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context';
import { Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

import LoginSignup from '../pages/LoginSignup';

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
        })
      }
    })
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <LoginSignup />
    </div>
  );
}

export default App;
