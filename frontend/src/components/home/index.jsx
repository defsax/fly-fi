import React, { useState, useEffect } from "react";
import axios from 'axios';
import useAPIData from "../../hooks/useAPIData"

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


export default function Home(props) {
  const {
    flightInfo, 
    setFlightInfo, 
    notification, 
    setNotification,
    results,
    setResults,
    reset
  } = useAPIData();

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
    //submitSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearch = function () {
    setResults([]);
    return axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
    .then(response => {
      if(response.data.error) {
        console.log(response.data.error)
      }
      else {
        console.log('response', response.data);
        setResults([response.data]);
        // reset();
      }
    })
  }
  useEffect(() => {
    submitSearch();
  }, []);
  
  return(
    <div className="home">

      {mode === LOGIN && (
        <div className="screen">
          <Login 
            handleLogin={handleLogin} 
            hideForm={back}
          />
        </div>
      )}
      {mode === REGISTER &&
        <div className="screen">
          <Register 
            handleLogin={handleLogin} 
            hideForm={back}
          />
        </div>
      }

      <Nav 
        isloggedin={currentUser.isLoggedIn ? 1 : 0}
        logout={logUserOut}
        username={currentUser.user.name}
        clickLogin={() => transition(LOGIN)}
        clickRegister={() => transition(REGISTER)}
      />
      <div className="map-sidebar">
        <Map 
        results={results}
        />
        <SidePanel
          flightInfo={flightInfo} 
          setFlightInfo={setFlightInfo} 
          notification={notification} 
          setNotification={setNotification}
          results={results}
          setResults={setResults}
          submitSearch={submitSearch}
          login={handleLogin}
          reset={reset}
          visualModeHook={{mode: mode, transition: transition, back: back}}
        />
      </div>
    </div>
  )
}