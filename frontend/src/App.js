import React, { useState, useEffect } from "react";
import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"

import UserList from './components/UserList';
import Welcome from './components/Welcome';

import './styles/css/App.css';

export default function App() {
  
  const [users, setUsers] = useState('');

  useEffect(() => {
    axios.get('/users')
    .then(response => {
      setUsers({users: response.data});
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {/* <UserList users={users}/> */}
      <Welcome />
    </div>
  );
}