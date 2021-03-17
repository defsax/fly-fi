import React from "react";
import "react-router-dom";


import "../../styles/scss/nav.scss"

export default function Nav(props) {
  const { isloggedin, clickLogin, clickRegister } = props;

  const handleLogin = function() { 
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