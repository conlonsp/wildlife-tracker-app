import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context';
import { Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

import Dashboard from '../pages/Dashboard';
import LoginSignup from '../pages/LoginSignup';
import Header from './Header';
import About from '../pages/About'

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

  // if(!user) return (
  //   <LoginSignup />
  // )

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <Dashboard />
        }/>
        <Route path='/loginsignup' element={
          <LoginSignup/>
        }/>
        <Route path='/about' element={
          <About/>
        }/>
      </Routes>
    </div>
  );
}

export default App;


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