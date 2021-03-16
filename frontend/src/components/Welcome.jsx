import React, {useState} from "react";
import Credits from "./home/Credits"
import Home from "./home/Home"
//import Map from "./home/Map"
import GoogleApiWrapper from "./home/Map"
import Nav from "./home/Nav"
import SidePanel from "./home/sidePanel/index"
import Button from "./Button"

export default function Welcome(props) {
  let loggedIn = true;

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  
  return(
    <div>
      
      <Nav isloggedin={loggedIn ? 1 : 0}/>
      <h1>I am welcome component  </h1>
      <GoogleApiWrapper /> 
      <Credits />
      <Home />
      <Button disabled={true} text ={'lets fly'}/>
      <SidePanel />
    </div>
  )
}