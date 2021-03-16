import React from 'react';
import Home from "./components/home/index"
import Welcome from "./components/Welcome"

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

export default function App(){


  return(
    // <Welcome />
    <div>
      <Router>
        <Switch>
        <Route exact path='/' 
            render={props => (
            <Welcome 
                // { ...props } 
                // loggedInStatus={currentUser.isLoggedIn}
            />
            )}
          />
          <Route exact path='/home' 
            render={props => (
            <Home 
                // { ...props } 
                // loggedInStatus={currentUser.isLoggedIn}
                // handleLogout={handleLogout}
                // username={currentUser.user.name}
            />
            )}
          />
          {/* <Route exact path='/login' 
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
          /> */}
        </Switch>
      </Router>
    </div>
  )
};