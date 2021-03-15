import React from "react";


import "./Nav.scss"

export default function Nav(props) {
 let username = "Captain"

  const handleLogin = function() { 
    if (props.isloggedin) {
      return ( 
   
      <ul className="nav-items">

        <li className="nav-menu">
          <a className="nav-link" href="www.google.ca"> Welcome, {username}</a>
        </li> 

        <li className="nav-menu" onClick={props.onClick}>
          <a className="nav-link" href="www.google.ca" > Logout</a>
        </li>

      </ul> 
    ) 

    } else {
      return (
        <ul className="nav-items">

          <li className="nav-menu" onClick={props.onClick}>
            <a className="nav-link" href="www.google.ca" > Login</a>
          </li>

          <li className="nav-menu" onClick={props.onClick}>
            <a className="nav-link" href="www.google.ca"> Register</a>
          </li>

        </ul>
      )
    }
  }


  return (

    <div className="Nav">
      <nav className="NavBarItems" isloggedin={props.isloggedin}> 
      
        <h1 className="navbar-logo"> I am NAVBAR LOGO</h1>
      </nav>

      <nav className="nav-bar-actions">
          {handleLogin()}

      </nav>
    </div>
    
  )
}  

// if user is logged in display name, and logout option if not, display 