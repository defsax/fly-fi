import React from 'react';
import { Link } from "react-router-dom";
import "../styles/css/credits.css"

export default function Credits(props) {
  return (
    <div>
      <div className="nav">
        <nav className="navBarItems" isloggedin={props.isloggedin}>  
          <Link to='/'>
            <img className="navbar-logo" alt="Fly-Fi" src={"https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/fly-fi-logo.png"}></img>
          </Link>
          <Link to='/credits'>
          <ul className="nav-menu">
            <li className="nav-item">
              <button className="nav-button">
                Credits
              </button>
            </li>
          </ul>
          </Link>
        </nav>
      </div>
      <p className="fli-fi-desc">Fly-Fi is a single page application built with multiple frameworks as it is shown on the page. <br />LightHouse Labs Final Project</p><img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
    <div className="credits">
      <section className="frontend">
        <h1>FRONTEND:</h1>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} /> 
        
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} /> 
        
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />  
      </section>
      <section className="contributors">
        <h1>CREDITS:</h1>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Perry Defayette</h1>
        </div>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Ali Bas</h1>
        </div>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Mike Ackison</h1>
        </div>
      </section>
      <section className="backend">
        <h1>BACKEND:</h1>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} /> 
        
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} /> 
        
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />  
      </section>

      </div>
    </div>
  );
}
