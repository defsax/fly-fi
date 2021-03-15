import React from "react";
import Credits from "./home/Credits"
import Home from "./home/Home"
import Map from "./home/Map"
import Nav from "./home/Nav"
import SidePanel from "./home/sidePanel/index"
import Button from "./Button"

export default function Welcome(props) {
  let loggedIn = true;
  
  return(
    <div>
      
      <Nav isloggedin={loggedIn ? 1 : 0}/>
      <h1>I am welcome component  </h1>
      <Credits />
      <Home />
      <Map />
      <Button disabled={true} text ={'lets fly'}/>
      <SidePanel />
    </div>
  )
}