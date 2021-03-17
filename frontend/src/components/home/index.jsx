import React, { useState, useEffect } from "react";
import axios from 'axios';

// COMPONENTS
// import Credits from "./Credits"
import Nav from "./Nav"
import SidePanel from "./sidePanel/index"
import Map from "./Map"
import Login from "./registration/Login";
import Register from "./registration/Register";

// HOOKS
import useVisualMode from '../../hooks/useVisualMode';

// STYLESHEETS
import "../../styles/scss/home.scss";

// MODES
const SEARCH = "SEARCH";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";


export default function Home() {

  const [ currentUser, setCurrentUser ] = useState({
    isLoggedIn: false,
    user: { }
  });

  const {mode, transition, back } = useVisualMode(
    SEARCH
  );

  const handleLogin = (data) => {

    const userObj = data.data.user;
    console.log('handleLogin', data);

    
    setCurrentUser({
      isLoggedIn: true,
      user: userObj
    });
    back();
  }
  const handleLogout = () => {
    setCurrentUser({
      isLoggedIn: false,
      user: {}
    });
  }

  //check loginstatus when: page loads, after logout, after login
  const loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        handleLogin(response);
      } else {
        console.log("loginStatus: logged out.");
        handleLogout();
      }
    })
    .catch(error => console.log('API errors:', error))
  }
  const logUserOut = () =>{
    axios.delete('/logout', {withCredentials: true})
    .then(response => {
      loginStatus();
      console.log(response);
    })
    .catch(error => console.log('API errors:', error))
  };

  //check loginstatus when page loads
  useEffect(() => {
    loginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <div className="home">

      {mode === LOGIN && (
        <Login 
          handleLogin={handleLogin} 
          hideForm={back}
        />
      )}
      {mode === REGISTER &&
        <Register 
          handleLogin={handleLogin} 
          hideForm={back}
        />
      }

      <Nav 
        isloggedin={currentUser.isLoggedIn ? 1 : 0}
        logout={logUserOut}
        username={currentUser.user.name}
        clickLogin={() => transition(LOGIN)}
        clickRegister={() => transition(REGISTER)}
      />
      <div className="map-sidebar">
        <Map />
        <SidePanel 
          login={handleLogin}
          visualModeHook={{mode: mode, transition: transition, back: back}}
        />
      </div>
    </div>
  )
}