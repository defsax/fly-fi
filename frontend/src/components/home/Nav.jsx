import React from "react";
import { Link } from "react-router-dom";

import "../../styles/css/nav.css"

export default function Nav(props) {
  const { isloggedin, clickLogin, clickRegister } = props;

  const handleLogin = function() { 
  // if user is logged in display name, and logout option if not, display 
    if (isloggedin) {
      return ( 
      <ul className="nav-items">
        <li className="nav-menu">
          <p className="nav-button">Welcome, {props.username}</p>
        </li> 

        <li className="nav-menu" onClick={props.logout}>
          <button className="nav-button">Logout</button>
        </li>
      </ul> 
    ) 

    } else {
      return (
        <ul className="nav-items">
          <li className="nav-menu" onClick={clickLogin}>
            <button className="nav-button">
              Login
            </button>
          </li>

          <li className="nav-menu" onClick={clickRegister}>
            <button className="nav-button">
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
          <img className="navbar-logo" alt="Fly-Fi" src={"https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/fly-fi-logo.png"}></img>
        </Link>
      </nav>

      <nav className="nav-bar-actions">
        {handleLogin()}
      </nav>
    </div>
  )
}  