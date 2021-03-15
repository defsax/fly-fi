import React from "react";
import { Link } from "react-router-dom";


import "./Nav.scss"

export default function Nav(props) {
  const { isloggedin } = props;

  const handleLogin = function() { 
    if (isloggedin) {
      return ( 
   
      <ul className="nav-items">

        <li className="nav-menu">
          <Link className="nav-link"> Welcome, {props.username}</Link>
        </li> 

        <li className="nav-menu" onClick={props.onClick}>
          <Link to="/logout" className="nav-link">Logout</Link>
        </li>

      </ul> 
    ) 

    } else {
      return (
        <ul className="nav-items">

          <li className="nav-menu" onClick={props.onClick}>
            <Link to="/login" className="nav-link">Login</Link>
            {/* <a className="nav-link" href="www.google.ca" > Login</a> */}
          </li>

          <li className="nav-menu" onClick={props.onClick}>
            <Link className="nav-link" to="/user">Register</Link>
            {/* <a className="nav-link" href="www.google.ca"> Register</a> */}
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