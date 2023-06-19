import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const UserContext = createContext(null)
const [user, setUser] = useState(null)

ReactDOM.render(
  <UserContext.Provider value={[user, setUser]}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
