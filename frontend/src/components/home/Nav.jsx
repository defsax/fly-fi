import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/nav.css';

export default function Nav(props) {
  const { isloggedin, clickLogin, clickRegister } = props;

  const handleLogin = function () {
    // if user is logged in display name, and logout option if not, display
    if (isloggedin) {
      return (
        <ul className='nav-menu'>
          <li className='nav-item'>
            <p>Welcome, {props.username}</p>
          </li>

          <li className='nav-item' onClick={props.logout}>
            <button className='nav-button'>Logout</button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='nav-menu'>
          <li className='nav-item' onClick={clickLogin}>
            <button className='nav-button'>Login</button>
          </li>

          <li className='nav-item' onClick={clickRegister}>
            <button className='nav-button'>Register</button>
          </li>
        </ul>
      );
    }
  };

  return (
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
              <button className='nav-button'>about</button>
            </li>
          </ul>
        </Link>
      </nav>

      <nav className='nav-bar-actions'>{handleLogin()}</nav>
    </div>
  );
}
