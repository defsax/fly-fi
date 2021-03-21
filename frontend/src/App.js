import React from 'react';
import Home from "./components/home/index"
import Credits from "./components/Credits"
import Welcome from "./components/Welcome"

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

export default function App(){


  return(

    <div>
      <Router>
        <Switch>
          <Route exact path='/' 
            render={props => (
            <Welcome 
            />
            )}
          />
          <Route exact path='/home' 
            render={props => (
            <Home 
            />
            )}
          />
          <Route exact path='/credits' 
            render={props => (
              <Credits
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
};