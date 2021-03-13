import React, { useState, useEffect } from "react";
import axios from "axios";

import UserList from './components/UserList';

import './styles/css/App.css';

export default function App() {
  
  const [users, setUsers] = useState('');

  useEffect(() => {
    axios.get('/users')
    .then(response => {
      // console.log(response.data);
      setUsers({users: response.data});
    })
    .catch(error => console.log(error));
  }, []);
  // const userKey = users.users.map(user => {
  //   return user.id;
  // });
  // console.log(userKey);

  return (
    <div>
      <h1>Users:</h1>
      
      <UserList users={users}/>
    </div>
  );
}