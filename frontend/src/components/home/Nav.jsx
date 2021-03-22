import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/nav.css';

export default function Nav(props) {
  const {
    isloggedin,
    clickLogin,
    clickRegister,
    clickMyFlights,
    // currentUser,
  } = props;

  const handleLogin = function () {
    // if user is logged in display name, and logout option if not, display
    if (isloggedin) {
      return (
        <ul className='nav-menu'>
          <li className='nav-item'>
            <p>Welcome, {props.username}</p>
          </li>

          <li className='nav-item' onClick={clickMyFlights}>
            <button className='nav-button'>My Flights</button>
          </li>

          <li className='nav-item' onClick={props.logout}>
            <button className='nav-button'>Logout</button>
          </li>

          <li className='nav-item'>
            <Link to='/credits'>
              <button className='nav-button'>About</button>
            </Link>
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

          <li className='nav-item'>
            <Link to='/credits'>
              <button className='nav-button'>About</button>
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className='nav' isloggedin={props.isloggedin}>
      <Link to='/'>
        <img
          className='navbar-logo'
          alt='Fly-Fi'
          src={
            //'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/fly-fi-logo.png'
            'https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/fly-fi%20cropped.png'
          }
        ></img>
      </Link>
      <div className='nav-bar-actions'>{handleLogin()}</div>
    </nav>
  );
}
