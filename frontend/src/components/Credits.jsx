import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/credits.css';

export default function Credits(props) {
  return (
    <div className='about-page'>
      <div className='nav'>
        <nav className='navBarItems' isloggedin={props.isloggedin}>
          <Link to='/'>
            <img
              className='navbar-logo'
              alt='Fly-Fi'
              src={
                'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/fly-fi-logo.png'
              }
            ></img>
          </Link>
          <Link to='/credits'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <button className='nav-button'>Info</button>
              </li>
            </ul>
          </Link>
          <Link to='/home'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <button className='nav-button'>Home</button>
              </li>
            </ul>
          </Link>
        </nav>
      </div>
      <p className='fly-fi-desc'>
        Fly-Fi is a single page application built with multiple frameworks as
        LightHouse Labs Final Project. You can track every flight took off and
        follow the landing schedule. A notification feature will send you an SMS
        to let you know about arriving flight.
      </p>
      <img
        alt='LHL'
        src={
          'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/lhl.png'
        }
      />
      <div className='credits'>
        <h1>CREDITS:</h1>
        <section className='contributors'>
          <div className='column'>
            <img
              className='row'
              alt='Perry'
              src={
                'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/Perry.png'
              }
            />

            <img
              className='row'
              alt='Ali'
              src={
                'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/Ali.png'
              }
            />

            <img
              className='row'
              alt='Mike'
              src={
                'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/Mike.png'
              }
            />
          </div>
          <div className='column'>
            <h1 className='row'>
              Perry Defayette
              <img
                alt='Github'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/github.png'
                }
              />
              defsax
            </h1>
            <h1 className='row'>
              Ali Bas
              <img
                alt='Github'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/github.png'
                }
              />
              alibas01
            </h1>
            <h1 className='row'>
              Mike Ackison
              <img
                alt='Github'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/github.png'
                }
              />
              mikeackison
            </h1>
          </div>
        </section>
        <div className='frameworks'>
          <section className='frontend'>
            <div className='title'>
              <h1>FRONTEND:</h1>
            </div>
            <div className='images'>
              <img
                alt='javascript'
                className='javascript'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/js.png'
                }
              />
              <img
                alt='react.js'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/react.png'
                }
              />
              <img
                alt='sass'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/sass.png'
                }
              />
              <img
                alt='html-css'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/html-css.jpeg'
                }
              />
            </div>
          </section>
          <section className='backend'>
            <div className='title'>
              <h1>BACKEND:</h1>
            </div>
            <div className='images'>
              <img
                alt='ruby'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/rubyrails.png'
                }
              />

              <img
                alt='postgres'
                src={
                  'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/postgresql.png'
                }
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
