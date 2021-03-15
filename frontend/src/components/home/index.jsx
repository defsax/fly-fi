import React from "react";
import Credits from "./Credits"
import Map from "./Map"
import Nav from "./Nav"
import SidePanel from "./sidePanel/index"
import Button from "../Button"

export default function Home(props) {
  const { loggedInStatus, username } = props;
  return(
    <div>
      <h1>I am Home component</h1>

      <Nav 
        isloggedin={loggedInStatus ? 1 : 0}handleLogout={props.handleLogout}
        username={username}
      />
      <Credits />
      <Map />
      <Button disabled={true} text ={'lets fly'}/>
      <SidePanel />
    </div>
  )
}