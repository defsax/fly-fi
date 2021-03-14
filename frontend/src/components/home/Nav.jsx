import React from "react";
import {useState} from "react"

import "./Nav.scss"

export default function Nav(props) {
 let username = "Captain"
  // const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleLogin = function() { 
    if (props.isLoggedIn) {
      return ( 
   
      <ul>

        <li className="nav-menu">
          <a className="nav-link"> Welcome, {username}</a>
        </li> 

        <li className="nav-menu" onClick={props.onClick}>
          <a className="nav-link" href="#" > Logout</a>
        </li>

      </ul> 
    ) 

    } else {
      return (
        <ul>

          <li className="nav-menu" onClick={props.onClick}>
            <a className="nav-link" href="#" > Login</a>
          </li>

          <li className="nav-menu" onClick={props.onClick}>
            <a className="nav-link" href="#" > Register</a>
          </li>

        </ul>
      )
    }
  }


  return (

    <div className="Nav">
      <nav className="NavBarItems" isLoggedIn={props.isLoggedIn}> 
      
        <h1 className="navbar-logo"> I am NAVBAR LOGO</h1>

          {handleLogin()}

      </nav>
    </div>
    
  )
}  

// if user is logged in display name, and logout option if not, display 