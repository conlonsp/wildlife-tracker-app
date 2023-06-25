import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context';
import { Route, Routes, useMatch } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

import Dashboard from '../pages/Dashboard';
import LoginSignup from '../pages/LoginSignup';
import Header from './Header';
import About from '../pages/About'
import Organizations from '../pages/Organizations'
import Organization from '../pages/Organization';

function App() {
  const { user, setUser } = useContext(UserContext)

  const [organizations, setOrganizations] = useState([])
  const [errors, setErrors] = useState([])

  // const match = useMatch('/organizations/:organization_id')

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch('/organizations')
    .then(r => {
      if(r.ok) {
        r.json().then(orgs => setOrganizations(orgs))
      } else {
        r.json().then(err => setErrors(err.errors))
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
          <LoginSignup />
        }/>
        <Route path='/about' element={
          <About />
        }/>
        <Route path='/organizations' element={
          <Organizations organizations={organizations} />
        }/>
        {user ? <Route path='/organizations/:id' element={
          <Organization organizations={organizations} />
        }/>
        :
          null
        }
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