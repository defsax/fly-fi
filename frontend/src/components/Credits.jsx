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
      <p className="fli-fi-desc">Fly-Fi is a single page application built with multiple frameworks as it is shown on the page. <br />LightHouse Labs Final Project</p><img alt="LHL" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
    <div className="credits">
      <section className="frontend">
        <h1>FRONTEND:</h1>
          <img alt="javascript" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/js.png"} /> 
        
          <img alt="react.js" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/react.png"} /> 
        
          <img alt="sass" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/sass.png"} />  

          <img alt="html-css" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/html-css.jpeg"} />  
      </section>
      <section className="contributors">
        <h1>CREDITS:</h1>
        <div>
          <img alt="Perry" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/Perry.png"} />
          <h1>Perry Defayette</h1>
        </div>
        <div>
          <img alt="Ali" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/Ali.png"} />
          <h1>Ali Bas</h1>
        </div>
        <div>
          <img alt="Mike" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/Mike.png"} />
          <h1>Mike Ackison</h1>
        </div>
      </section>
      <section className="backend">
        <h1>BACKEND:</h1>
          <img alt="ruby" src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/rubyrails.png"} /> 
        
          <img alt="postgres" src={"https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/postgresql.png"} /> 

      </section>

      </div>
    </div>
  );
}
