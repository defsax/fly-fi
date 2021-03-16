import React, { useState, useEffect } from "react";
import axios from 'axios';

import Credits from "./Credits"
import Map from "./Map"
import Nav from "./Nav"
import SidePanel from "./sidePanel/index"
import Button from "../Button"

export default function Home() {
  // const { loggedInStatus, username } = props;


  const [ currentUser, setCurrentUser ] = useState({
    isLoggedIn: false,
    user: { }
  });

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
  }, []);


  return(
    <div>
      <h1>I am Home component</h1>

      <Nav 
        isloggedin={currentUser.isLoggedIn ? 1 : 0}
        logout={logUserOut}
        username={currentUser.user.name}
      />
      <Credits />
      <Map />
      <Button disabled={true} text ={'lets fly'}/>
      <SidePanel login={handleLogin}/>
    </div>
  )
}