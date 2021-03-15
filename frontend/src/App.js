import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Login from "./components/home/sidePanel/Login"
import Register from "./components/home/sidePanel/Register"
import Home from "./components/home/index"
import Welcome from "./components/Welcome"

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

export default function App(){

  const [ currentUser, setCurrentUser ] = useState({
    isLoggedIn: true,
    user: {

    }});

  const handleLogin = (data) => {
    setCurrentUser({
      isLoggedIn: true,
      user: data.user
    })
  }
  const handleLogout = () => {
    setCurrentUser({
    isLoggedIn: false,
    user: {}
    })
  }
  const loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        handleLogin(response);
      } else {
        handleLogout();
      }
    })
    .catch(error => console.log('API errors:', error))
  }

  useEffect(() => {
    loginStatus();
  }, []);


  return(
    // <Welcome />
    <div>
      <Router>
        <Switch>
        <Route exact path='/' 
            render={props => (
            <Welcome 
                { ...props } 
                loggedInStatus={currentUser.isLoggedIn}
            />
            )}
          />
          <Route exact path='/home' 
            render={props => (
            <Home 
                { ...props } 
                loggedInStatus={currentUser.isLoggedIn}
                handleLogout={handleLogout}
                username={currentUser.user.name}
            />
            )}
          />
          <Route exact path='/login' 
            render={props => (
              <Login 
                { ...props } 
                handleLogin={handleLogin}
                loggedInStatus={currentUser.isLoggedIn}
              />
            )}
          />
          
          <Route exact path='/signup' 
            render={props => (
              <Register 
                {...props} 
                handleLogin={handleLogin}
                loggedInStatus={currentUser.isLoggedIn}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
};