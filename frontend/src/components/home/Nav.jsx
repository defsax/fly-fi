import React from "react";
import {useState} from "react"

import { NavItems} from "./NavItems"

import "./Nav.scss"

export default function Nav(props) {


 let user = true

  return(
    <div className="Nav">
      <nav className="NavBarItems"> 
      
        <h1 className="navbar-logo"> I am NAVBAR LOGO</h1>


          <ul>

          <li className="nav-menu">
              <a className="nav-link" href="#" > Welcome Username</a>
            </li> 

            <li className="nav-menu">
              <a className="nav-link" href="#" > Login</a>
            </li>

            <li className="nav-menu">
              <a className="nav-link" href="#" > Logout</a>
            </li>

            <li className="nav-menu">
              <a className="nav-link" href="#" > Register</a>
            </li>


          </ul>

          {/* <ul className="nav-menu">
              {NavItems.map((item, index)=> {
                return (
                  <li key={index} 
                  // onClick={(e) => {e.target.value}} 
                  >
                    <a className={item.className} href={item.url}>
                    {item.title} 
                    </a>
                  </li>

                )
              })}
          </ul> */}
      </nav>
    </div>
  )
}  

// if user is logged in display name, and logout option if not, display 