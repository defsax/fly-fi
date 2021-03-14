import React from "react";
import {useState} from "react"

import { NavItems} from "./NavItems"

import "./Nav.css"

export default function Nav(props) {


 

  return(
    <div className="Nav">
      <nav className="NavBarItems"> 
      
        <h1 className="navbar-logo"> I am NAVBAR LOGO</h1>
          <ul className="nav-menu">
              {NavItems.map((item, index)=> {
                return (
                  <li key={index}>
                    <a className={item.className} href={item.url}>
                    {item.title} 
                    </a>
                  </li>

                )
              })}
          </ul>
      </nav>
    </div>
  )
}  