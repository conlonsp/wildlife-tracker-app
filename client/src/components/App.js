import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context';
import { Route, Routes } from 'react-router-dom';

// import logo from '../logo.svg';
import '../App.css';

import Dashboard from '../pages/Dashboard';
import LoginSignup from '../pages/LoginSignup';
import Header from './Header';
import About from '../pages/About';
import Organizations from '../pages/Organizations';
import Organization from '../pages/Organization';
import Project from '../pages/Project';
import Footer from './Footer';
import CreateOrg from "../pages/CreateOrg";
import UpdateOrg from "../pages/UpdateOrg";
import CreateProj from "../pages/CreateProj"

function App() {
  const { user, setUser } = useContext(UserContext)

  const [organizations, setOrganizations] = useState([])
  const [organization, setOrganization] = useState({})
  const [errors, setErrors] = useState([])
  const [orgId, setOrgId] = useState(null)
  const [orgProjects, setOrgProjects] = useState([])

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

  function handleUpdate(updatedOrg) {
    let updates = organizations.map(org => {
      if(org.id === updatedOrg.id) {
        return updatedOrg
      } else {
        return org
      }
    })
    setOrganizations(updates)
  }

  function handleDelete(id) {
    setOrganizations(prevOrgs => prevOrgs.filter(org => org.id !== id))
  }

  function grabId(id) {
    setOrgId(id)
  }

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
        <Route path='/organizations'>
          <Route index element={
            <Organizations
              organizations={organizations}
              setOrganizations={setOrganizations}
            />
          }/>
          <Route path=':id' element={
            <Organization
              organization={organization}
              setOrganization={setOrganization}
              onDelete={handleDelete}
              grabId={grabId}
              orgProjects={orgProjects}
              setOrgProjects={setOrgProjects}
            />
          }/>
          <Route path='new' element={
            <CreateOrg
              organizations={organizations}
              setOrganizations={setOrganizations}
            />
          }/>
          <Route path=':id/update' element={
            <UpdateOrg
              organization={organization}
              onUpdate={handleUpdate}
            />
          }/>
        </Route>
        <Route path='/projects/:id' element={
          <Project orgId={orgId} />
        }/>
        <Route path='/projects/create' element={
          <CreateProj
            orgId={orgId}
            orgProjects={orgProjects}
            setOrgProjects={setOrgProjects}
          />
        }/>
      </Routes>
      <Footer />
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

      // <Route path='/create-organization' element={
      //   <CreateOrg
      //     organizations={organizations}
      //     setOrganizations={setOrganizations}
      //   />
      // }/>
      // <Route path='/organizations/:id/update' element={
      //   <UpdateOrg
      //     organization={organization}
      //     onUpdate={handleUpdate}
      //   />
      // }/>
      // <Route path='/organizations' element={
      //   <Organizations
      //     organizations={organizations}
      //     setOrganizations={setOrganizations}
      //   />
      // }/>
      // <Route path='/organizations/:id' element={
      //   <Organization
      //     organization={organization}
      //     setOrganization={setOrganization}
      //     onDelete={handleDelete}
      //   />
      // }/>