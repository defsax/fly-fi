import React from "react";
import { Link } from "react-router-dom";

import logo from "https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png?raw=true"


import "../../styles/scss/nav.scss"

export default function Nav(props) {
  const { isloggedin, clickLogin, clickRegister } = props;

  const handleLogin = function() { 
  // if user is logged in display name, and logout option if not, display 
    if (isloggedin) {
      return ( 
   
      <ul className="nav-items">

        <li className="nav-menu">
          <p className= "nav-link">Welcome, {props.username}</p>
        </li> 

        <li className="nav-menu" onClick={props.logout}>
          <button className= "nav-link">Logout</button>
        </li>

      </ul> 
    ) 

    } else {
      return (
        <ul className="nav-items">

          <li className="nav-menu" onClick={clickLogin}>
            <button>
              Login
            </button>
          </li>

          <li className="nav-menu" onClick={clickRegister}>
            <button>
              Register
            </button>
            
          </li>

        </ul>
      )
    }
  }


  return (

    <div className="nav">
      <nav className="navBarItems" isloggedin={props.isloggedin}> 
        
      <Link to='/'>
        <img className="navbar-logo" alt="Fly-Fi" src={logo}></img>
      </Link>
      </nav>

      <nav className="nav-bar-actions">
          {handleLogin()}

      </nav>
    </div>
    
  )
}  