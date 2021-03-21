import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAPIData from '../../hooks/useAPIData';

// COMPONENTS
// import Credits from "./Credits"
import Nav from './Nav';
import SidePanel from './sidePanel/index';
import Map from './Map';
import Login from './registration/Login';
import Register from './registration/Register';

// HOOKS!!!
import useVisualMode from '../../hooks/useVisualMode';

// STYLESHEETS
import '../../styles/scss/home.scss';

// MODES
const SEARCH = 'SEARCH';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';

export default function Home(props) {
  const {
    arrival,
    setArrival,
    departure,
    setDeparture,
    flightNumber,
    setFlightNumber,
    setResults,
    results,
    reset,
    defaultView,
    setDefaultView,
    flightInfo,
    setFlightInfo,
  } = useAPIData();

  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    user: {},
    flights: [],
  });

  const { mode, transition, back } = useVisualMode(SEARCH);

  const handleLogin = (response) => {
    const userObj = response.data.user;

    setCurrentUser({
      isLoggedIn: true,
      user: userObj,
      flights: response.data.flights,
    });
  };
  const handleLogout = () => {
    setCurrentUser({
      isLoggedIn: false,
      user: {},
      flights: [],
    });
  };

  //check loginstatus when: page loads, after logout, after login
  const loginStatus = () => {
    axios
      .get('/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          console.log('(axios logged_in)');
          console.log('saved flights:', response.data.flights);
          handleLogin(response);
        } else {
          console.log('loginStatus: logged out.');
          handleLogout();
        }
      })
      .catch((error) => console.log('API errors:', error));
  };
  const logUserOut = () => {
    axios
      .delete('/logout', { withCredentials: true })
      .then((response) => {
        loginStatus();
        console.log(response);
      })
      .catch((error) => console.log('API errors:', error));
  };

  //check loginstatus when page loads
  useEffect(() => {
    loginStatus();
    //submitSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearch = function () {
    setResults([]);
    console.log('submit search called.');
    return axios
      .post('/search', {
        flight: {
          flight_number: flightNumber,
          dep_airport: departure,
          arr_airport: arrival,
          lat: '',
          lng: '',
          distance: 0,
        },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          console.log('submit search response:', response.data);
          setResults(response.data);
          //setMapResults(response.data);
        }
      });
  };

  useEffect(() => {
    submitSearch();
  }, [flightInfo]);

  return (
    <div className='home'>
      {mode === LOGIN && (
        <div className='screen'>
          <Login handleLogin={handleLogin} hideForm={back} />
        </div>
      )}
      {mode === REGISTER && (
        <div className='screen'>
          <Register handleLogin={handleLogin} hideForm={back} />
        </div>
      )}

      <Nav
        isloggedin={currentUser.isLoggedIn ? 1 : 0}
        logout={logUserOut}
        username={currentUser.user.name}
        clickLogin={() => transition(LOGIN)}
        clickRegister={() => transition(REGISTER)}
      />
      <div className='map-sidebar'>
        <Map
          results={results}
          defaultView={defaultView}
          setDefaultView={setDefaultView}
        />
        <SidePanel
          arrival={arrival}
          setArrival={setArrival}
          departure={departure}
          setDeparture={setDeparture}
          flightNumber={flightNumber}
          setFlightNumber={setFlightNumber}
          results={results}
          setResults={setResults}
          submitSearch={submitSearch}
          login={handleLogin}
          reset={reset}
          defaultView={defaultView}
          setDefaultView={setDefaultView}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          flightInfo={flightInfo}
          setFlightInfo={setFlightInfo}
        />
      </div>
    </div>
  );
}
